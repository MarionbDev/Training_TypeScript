import chalk from "chalk";
import { cpus } from 'os'; // Import ES6 style
const answer = JSON.stringify(cpus());
console.log(chalk.yellow(answer))