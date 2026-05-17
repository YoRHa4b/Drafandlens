/*
  Usage: node scripts/optimize-images.js [sourceDir]
  - sourceDir: folder with original images (default: ./uploads)
  Output: optimized JPEG files written to ./public/images
*/

import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const srcDir = process.argv[2] || path.join(process.cwd(), 'uploads');
const outDir = path.join(process.cwd(), 'public', 'images');

if (!fs.existsSync(srcDir)) {
  console.error('Source directory does not exist:', srcDir);
  process.exit(1);
}
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const files = fs.readdirSync(srcDir).filter(f => /\.(jpe?g|png)$/i.test(f));
if (!files.length) {
  console.log('No image files found in', srcDir);
  process.exit(0);
}

(async () => {
  for (const file of files) {
    const input = path.join(srcDir, file);
    const ext = path.extname(file).toLowerCase();
    const name = path.basename(file, ext);
    const outJpeg = path.join(outDir, `${name}.jpg`);
    try {
      await sharp(input)
        .rotate()
        .resize({ width: 1600, withoutEnlargement: true })
        .jpeg({ quality: 78, chromaSubsampling: '4:4:4' })
        .toFile(outJpeg);
      console.log('Optimized ->', outJpeg);
    } catch (err) {
      console.error('Failed to process', input, err);
    }
  }
})();
