import { createClient } from '@supabase/supabase-js';
import * as fs from 'fs';
import * as path from 'path';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseServiceKey);

const LIBRARY_PATH = path.join(process.cwd(), 'public', 'library');

async function syncLibrary() {
  console.log('🚀 Starting Library Sync...');

  if (!fs.existsSync(LIBRARY_PATH)) {
    console.error('❌ Library path not found:', LIBRARY_PATH);
    return;
  }

  const categories = fs.readdirSync(LIBRARY_PATH).filter(f => fs.statSync(path.join(LIBRARY_PATH, f)).isDirectory());

  for (const category of categories) {
    const categoryPath = path.join(LIBRARY_PATH, category);
    await processDirectory(categoryPath, category);
  }

  console.log('✅ Sync Completed!');
}

async function processDirectory(dirPath: string, category: string) {
  const items = fs.readdirSync(dirPath);

  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stats = fs.statSync(fullPath);

    if (stats.isDirectory()) {
      await processDirectory(fullPath, category);
    } else if (stats.isFile() && !item.startsWith('.')) {
      const fileName = item;
      const relativePath = '/library/' + path.relative(LIBRARY_PATH, fullPath);
      
      // Clean title: remove extension and replace underscores/dashes with spaces
      const title = fileName.replace(/\.[^/.]+$/, "").replace(/[_-]/g, " ");

      console.log(`📄 Syncing: [${category}] ${title}`);

      const { error } = await supabase
        .from('library_resources')
        .upsert({
          title,
          category,
          file_path: relativePath,
          tags: [category.toLowerCase()],
        }, { onConflict: 'file_path' });

      if (error) {
        console.error(`❌ Error syncing ${fileName}:`, error.message);
      }
    }
  }
}

syncLibrary().catch(console.error);
