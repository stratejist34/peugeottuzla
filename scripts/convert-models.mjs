import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

const jobs = [
  'public/images/Peugeot-208-768x558.jpg',
  'public/images/Peugeot_2008-Bakim-Fiyatlari-768x432.jpg',
  'public/images/Peugeot-308-peugeot-servis-pendik-768x421.png',
  'public/images/2022_peugeot_308_7_2560x1440-768x432.jpg',
  'public/images/C3airMain-768x432.jpg',
  'public/images/Citroen-C4-Periyodik-Bakim-Fiyatlari-768x512.jpg'
];

const toAvif = (inputPath) => {
  const { dir, name } = path.parse(inputPath);
  return path.join(dir, `${name}.avif`);
};

const run = async () => {
  await Promise.all(
    jobs.map(async (input) => {
      try {
        await fs.access(input);
      } catch {
        console.warn(`Missing: ${input}`);
        return;
      }

      const output = toAvif(input);
      await sharp(input)
        .avif({ quality: 45 })
        .toFile(output);
      console.log(`OK: ${output}`);
    })
  );
};

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
