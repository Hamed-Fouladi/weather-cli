import chalk from 'chalk';
import dedent from 'dedent-js';

const printError = (error) => {
    console.log(chalk.bgRed(' ERROR ') + ' ' + error);
};

const printSuccess = (message) => {
    console.log(chalk.bgGreen(' SUCCESS ') + ' ' + message);
};

const printHelp = () => {
    console.log(
        dedent(`${chalk.bgCyan(' HELP ')}
        Withot params - output weather
        -s [CITY] for city input
        -h for help output
        -t [API_KEY] for token saving
        `)
    );
};

export { printError, printSuccess, printHelp };