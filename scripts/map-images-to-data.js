import fs from 'fs';
import path from 'path';

const imagesDir = path.join(process.cwd(), 'public', 'images');
const dataFile = path.join(process.cwd(), 'src', 'data', 'siteData.js');

if (!fs.existsSync(imagesDir)) {
  console.error('No images directory:', imagesDir);
  process.exit(1);
}
if (!fs.existsSync(dataFile)) {
  console.error('No site data file:', dataFile);
  process.exit(1);
}

const images = fs.readdirSync(imagesDir).filter(f => /\.(jpe?g|png)$/i.test(f));
if (!images.length) {
  console.log('No images found in', imagesDir);
  process.exit(0);
}

const code = fs.readFileSync(dataFile, 'utf-8');
// Find portfolioItems array block
const start = code.indexOf('export const portfolioItems = [');
if (start === -1) {
  console.error('portfolioItems block not found');
  process.exit(1);
}
const before = code.slice(0, start);
const afterStart = code.slice(start);
const end = afterStart.indexOf('];');
if (end === -1) {
  console.error('portfolioItems array end not found');
  process.exit(1);
}
const block = afterStart.slice(0, end + 2); // include '];'

// Build new block with image mapping: use first 4 images
const mapped = images.slice(0, 4).map((img, idx) => {
  const titleMap = [
    'Retrato profesional',
    'Contenido para negocios',
    'Sitios web empresariales',
    'Video social',
  ];
  return `  {\n    title: '${titleMap[idx]}',\n    category: '${idx === 2 ? 'Web Dev' : idx === 3 ? 'Video' : idx === 1 ? 'Marketing' : 'Fotografia'}',\n    image: '/images/${img}',\n  },\n`;
}).join('');

const newBlock = 'export const portfolioItems = [\n' + mapped + '];\n';

const newCode = before + newBlock + afterStart.slice(end + 2);
fs.writeFileSync(dataFile, newCode, 'utf-8');
console.log('Updated portfolio image mapping in', dataFile);
