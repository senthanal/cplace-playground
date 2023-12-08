import { CliOptions } from './cli-options.type';
// eslint-disable-next-line @nx/enforce-module-boundaries
import commandLineArgs from 'command-line-args';
import { printLicenseStats, writeToFile } from './stat-exporter';

const optionDefinitions = [
  { name: 'path', alias: 'p', type: String },
  { name: 'filename', alias: 'n', type: String },
  { name: 'output', alias: 'o', type: String, defaultValue: 'console' },
  {
    name: 'outputDirectory',
    alias: 'd',
    type: String,
    defaultValue: __dirname,
  },
];
const options = commandLineArgs(optionDefinitions, {
  stopAtFirstUnknown: true,
}) as CliOptions;

process(options);

function process(options: CliOptions) {
  switch (options.output) {
    case 'console':
      printLicenseStats(options.path, options.filename);
      break;
    default:
      writeToFile(options.path, options.filename, options.outputDirectory);
      break;
  }
}
