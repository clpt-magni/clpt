import fs from 'fs';
import path from 'path';

const PUBLIC_DIR = path.resolve('src/app/(public)');

// Helper to convert kebab-case/camelCase to Title Case
function toTitleCase(str) {
  return str
    .replace(/[-_]+/g, ' ')
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

// Walk through directory recursively
function walk(dir, callback) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      walk(fullPath, callback);
    } else {
      callback(fullPath);
    }
  }
}

// Process page.tsx files
walk(PUBLIC_DIR, (filePath) => {
  const fileName = path.basename(filePath);
  if (fileName !== 'page.tsx') return;

  const content = fs.readFileSync(filePath, 'utf-8');

  // Rule 1: Must be a client component
  if (!content.trim().startsWith('"use client"') && !content.trim().startsWith("'use client'")) {
    return;
  }

  // Rule 2: Must not already have metadata exports
  if (content.includes('export const metadata') || content.includes('generateMetadata')) {
    return;
  }

  // Determine path relative to public dir
  const relativePath = path.relative(PUBLIC_DIR, filePath);
  const routeParts = path.dirname(relativePath).split(path.sep);

  // Skip the root public page (e.g. homepage)
  if (routeParts.length === 1 && routeParts[0] === '.') return;

  const lastPart = routeParts[routeParts.length - 1];
  const section = routeParts[0]; // e.g. resources, compliance, academic

  const pageTitle = toTitleCase(lastPart);
  let title = `${pageTitle} | Chalapathi Institute of Pharmaceutical Sciences`;
  let description = `Explore ${pageTitle} at Chalapathi Institute of Pharmaceutical Sciences (CLPT), Guntur. Find details, facilities, and academic information.`;

  if (section === 'resources') {
    description = `Explore ${pageTitle} facilities, infrastructure, and student resources at Chalapathi Institute of Pharmaceutical Sciences (CLPT), Guntur.`;
  } else if (section === 'compliance') {
    description = `Access official ${pageTitle} documents, audit reports, and regulatory approvals for Chalapathi Institute of Pharmaceutical Sciences (CLPT), Guntur.`;
  } else if (section === 'academic') {
    description = `Learn more about the ${pageTitle} guidelines, schedules, and academic quality assurance at Chalapathi Institute of Pharmaceutical Sciences (CLPT), Guntur.`;
  } else if (section === 'about') {
    description = `Read about ${pageTitle}, college achievements, institutional practices, and rankings of Chalapathi Institute of Pharmaceutical Sciences (CLPT), Guntur.`;
  } else if (section === 'admissions') {
    description = `Complete details on ${pageTitle}, rules, procedures, and criteria for pharmacy admissions at Chalapathi Institute of Pharmaceutical Sciences (CLPT), Guntur.`;
  }

  // Determine client component name
  const clientName = toTitleCase(lastPart).replace(/\s+/g, '') + 'Client';
  const clientFileName = `${clientName}.tsx`;
  const clientFilePath = path.join(path.dirname(filePath), clientFileName);

  console.log(`Refactoring: ${relativePath}`);
  console.log(`- New Client Component: ${clientFileName}`);
  console.log(`- Title: ${title}`);
  console.log(`- Description: ${description}`);

  // Write the original client content to clientFilePath
  fs.writeFileSync(clientFilePath, content, 'utf-8');

  // Write new Server Component to filePath
  const newPageContent = `import ${clientName} from "./${clientName}";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "${title}",
  description: "${description}",
};

export default function Page() {
  return <${clientName} />;
}
`;

  fs.writeFileSync(filePath, newPageContent, 'utf-8');
});
