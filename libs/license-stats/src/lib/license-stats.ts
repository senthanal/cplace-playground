import fs from 'fs';
import path from 'path';
import { LicenseStats } from './license-stats.model';
import { License } from './license.model';

export function licenseStats(path: string, fileName: string): LicenseStats[] {
  const licenseStats: LicenseStats[] = [];
  readAllFiles(path)
    .filter((filePath) => filePath.endsWith(fileName))
    .flatMap((filePath) =>
      JSON.parse(fs.readFileSync(filePath, { encoding: 'utf-8' }))
    )
    .forEach((license) => {
      const l = license as License;
      const foundLicense = licenseStats.find(
        (licenseStat) => licenseStat.license === l.license
      );
      const foundProduct = foundLicense
        ? foundLicense.products.find((p) => p === l.product)
        : false;
      if (foundLicense && !foundProduct) {
        foundLicense.count = foundLicense.count + 1;
        foundLicense.products.push(l.product);
      }
      if (!foundLicense) {
        licenseStats.push({
          license: l.license,
          count: 1,
          products: [l.product],
        } as LicenseStats);
      }
    });
  return licenseStats;
}

function readAllFiles(dir: string): string[] {
  const files = fs.readdirSync(path.resolve(dir), { withFileTypes: true });

  return files.flatMap((file) => {
    if (file.isDirectory()) {
      return readAllFiles(path.join(dir, file.name));
    }
    return path.join(dir, file.name);
  });
}
