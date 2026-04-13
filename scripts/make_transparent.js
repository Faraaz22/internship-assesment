const fs = require('fs');
const path = require('path');
const { PNG } = require('pngjs');

const inPath = path.join(__dirname, '..', 'public', 'jigsaw.png');
const outPath = path.join(__dirname, '..', 'public', 'jigsaw_transparent.png');
const THRESHOLD = 250; // pixels >= this value (0-255) considered background (near-white)

try {
  const data = fs.readFileSync(inPath);
  const png = PNG.sync.read(data);
  const buf = png.data;
  for (let i = 0; i < buf.length; i += 4) {
    const r = buf[i];
    const g = buf[i + 1];
    const b = buf[i + 2];
    if (r >= THRESHOLD && g >= THRESHOLD && b >= THRESHOLD) {
      buf[i + 3] = 0; // set alpha to 0
    }
  }
  const outBuffer = PNG.sync.write(png);
  fs.writeFileSync(outPath, outBuffer);
  console.log('Saved', outPath);
} catch (err) {
  console.error('Error processing image:', err);
  process.exit(1);
}
