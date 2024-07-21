import { readdirSync, writeFileSync } from 'fs';
import { basename, extname } from 'path';

const imgDirectory = 'assets/gui/fantasy-wooden';
const outputFilePath = 'assets/gui/fantasy-wooden/image.pack.json';

function generateImagePack(directory) {
  const imgFiles = readdirSync(directory).filter((file) =>
    ['.png', '.jpg'].includes(extname(file).toLowerCase())
  );

  const imgPack = {
    path: directory.replace(/\\/g, '/'),
    files: imgFiles.map((file) => ({
      type: 'image',
      key: basename(file, extname(file)),
      url: file.replace(/\\/g, '/'),
    })),
  };

  writeFileSync(outputFilePath, JSON.stringify(imgPack, null, 2));
  console.log(`Image pack generated: ${outputFilePath}`);
}

generateImagePack(imgDirectory);
