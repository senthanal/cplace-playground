import { existsSync, mkdirSync, writeFileSync } from 'fs';
import { join } from 'path';
import { licenseStats } from './license-stats';

export function printLicenseStats(path: string, fileName: string): void {
  licenseStats(path, fileName).forEach((stat) =>
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
    join(outputDirectory, outputFileName),
    JSON.stringify(licenseStats(path, fileName), null, 2),
    'utf8'
  );
}
