import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { capitalize } from './utils';
import { Header } from 'vitepress';

interface HeaderEntry {
  name: string;
  link: string;
}

const __dirname = import.meta.dirname;

function generateHeaderEntries(): void {
  const pagesDir = path.join(__dirname, '../theme/pages');
  const entries: HeaderEntry[] = [];

  const items = fs.readdirSync(pagesDir, {withFileTypes: true});

  for (const item of items) {
    if (item.isDirectory()) {
      const dirName = item.name;
      const capitalizedName = capitalize(dirName);
      //const indexPath = path.join(pagesDir, dirName, cpaitalizedName + 'Index.vue');
      entries.push({
        name: capitalizedName,
        link: '/' + dirName
      });
    }
  }

  const outputContent = `
// Auto-generated header entries
export interface HeaderEntry {
  name: string;
  link: string;
}

export const headerEntries: HeaderEntry[] = ${JSON.stringify(entries, null, 2)};
`;
  const outputPath = path.join(__dirname, '../theme/pages/header-entries.ts');
  fs.writeFileSync(outputPath, outputContent);
  console.log(`generated header entries: ${entries.length} directories found`);
}

generateHeaderEntries();