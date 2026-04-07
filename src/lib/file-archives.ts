import fs from 'fs';
import path from 'path';

export interface FileEntry {
  name: string;
  sourceUrl?: string; // PPT/PPTX for download
  viewUrl?: string;   // PDF for browser viewing
  type: 'pdf' | 'ppt' | 'pptx' | 'mp4' | 'other';
  size?: number;
}

export interface CategoryGroup {
  category: string;
  files: FileEntry[];
}

export async function getFileArchive(): Promise<CategoryGroup[]> {
  const uploadsDir = path.join(process.cwd(), 'public', 'uploads');
  const groups: CategoryGroup[] = [];

  if (!fs.existsSync(uploadsDir)) return [];

  function scanDir(currentPath: string, relativePath: string = '') {
    const items = fs.readdirSync(currentPath);
    const filesMap = new Map<string, FileEntry>();
    const subDirs: string[] = [];

    items.forEach(item => {
      if (item === '.DS_Store' || item.startsWith('.')) return;
      
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        subDirs.push(item);
      } else {
        const ext = path.extname(item).toLowerCase();
        const baseName = path.basename(item, ext);
        let type: FileEntry['type'] = 'other';
        if (ext === '.pdf') type = 'pdf';
        else if (ext === '.ppt') type = 'ppt';
        else if (ext === '.pptx') type = 'pptx';
        else if (ext === '.mp4') type = 'mp4';

        const url = `/uploads/${relativePath}${relativePath ? '/' : ''}${item}`;
        
        if (!filesMap.has(baseName)) {
          filesMap.set(baseName, {
            name: baseName,
            type,
            size: stat.size,
            ...(type === 'pdf' ? { viewUrl: url } : { sourceUrl: url })
          });
        } else {
          const existing = filesMap.get(baseName)!;
          if (type === 'pdf') {
            existing.viewUrl = url;
          } else {
            existing.sourceUrl = url;
            existing.type = type; // Prefer showing PPTX icon if both exist
          }
        }
      }
    });

    const filesInThisDir = Array.from(filesMap.values());

    if (filesInThisDir.length > 0) {
      const categoryName = relativePath.split('/').join(' / ') || 'General';
      groups.push({
        category: categoryName,
        files: filesInThisDir.sort((a, b) => a.name.localeCompare(b.name))
      });
    }

    subDirs.forEach(subDir => {
      scanDir(path.join(currentPath, subDir), relativePath ? `${relativePath}/${subDir}` : subDir);
    });
  }

  scanDir(uploadsDir);

  // Sort groups by category name
  return groups.sort((a, b) => a.category.localeCompare(b.category));
}
