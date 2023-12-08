import { existsSync, mkdirSync, writeFileSync } from 'fs';
import { resolve } from 'path';
import { getLicenseStats } from './license-stats';

export function printLicenseStats(path: string, fileName: string): void {
  getLicenseStats(path, fileName).forEach((stat) =>
    console.log(`${stat.license}: ${stat.count}`)
  );
}

export function writeToFile(
  path: string,
  fileName: string,
  outputDirectory: string
): void {
  const outputFileName = 'license-stats.json';
  const dirExists = existsSync(outputDirectory);
  if (!dirExists) {
    mkdirSync(outputDirectory);
  }
  writeFileSync(
    resolve(outputDirectory, outputFileName),
    JSON.stringify(getLicenseStats(path, fileName), null, 2),
    {
      encoding: 'utf8',
      flag: 'w'
    }
  );
}
