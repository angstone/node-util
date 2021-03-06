import chalk from 'chalk';

/* color dev console tools */
export const log = (t:any) => { console.log(chalk.magenta(t)); };
export const info = (t:any) => { console.info(chalk.cyan(t)); };
export const warn = (t:any) => { console.warn(chalk.yellow(t)); };
export const error = (t:any) => { console.error(chalk.red(t)); };
export const success = (t:any) => { console.info(chalk.green(t)); };
export const dev = (t:any) => {
  if(process.env.NODE_ENV=='development')
    console.log(chalk.bgCyan(t));
};
export const bp = (t:any) => { console.warn(chalk.bgMagenta(t)); };

export const delay = async (time: number) => {
  await new Promise((resolve)=>setTimeout(resolve, time));
}
