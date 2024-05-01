// Importer les modules nécessaires
import chalk from 'chalk';
import { cpus } from 'os';


const cpuInfo = cpus();

const cpuInfoString = JSON.stringify(cpuInfo, null, 2);

console.log(chalk.red(cpuInfoString));
