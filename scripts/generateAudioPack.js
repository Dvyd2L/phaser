import { readdirSync, writeFileSync } from 'fs';
import { basename, extname } from 'path';

const audioDirectory = 'assets/audio/piano-instumental-loops/wav';
const outputFilePath = 'assets/audio/piano-instumental-loops/audio.pack.json';

function generateAudioPack(directory) {
  const audioFiles = readdirSync(directory).filter((file) =>
    ['.mp3', '.ogg', '.wav'].includes(extname(file).toLowerCase())
  );

  const audioPack = {
    path: directory.replace(/\\/g, '/'),
    files: audioFiles.map((file) => ({
      type: 'audio',
      key: basename(file, extname(file)),
      url: file.replace(/\\/g, '/'),
    })),
  };

  writeFileSync(outputFilePath, JSON.stringify(audioPack, null, 2));
  console.log(`Audio pack generated: ${outputFilePath}`);
}

generateAudioPack(audioDirectory);
