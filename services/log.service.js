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

const printWeather = (res, icon) => {
    console.log(
        dedent(`${chalk.bgYellow(' Weather ')} Weather in city ${res.name}
        ${icon} ${res.weather[0].description}
        Temperature: ${res.main.temp} (feels liike ${res.main.feels_like})
        Humidity: ${res.main.humidity}%
        Wind speed: ${res.wind.speed}
        `)
    );
};

export { printError, printSuccess, printHelp, printWeather };