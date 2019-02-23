import dayjs from "dayjs";

const log = console.log;
console.log = console.info = function (message?: any, ...optionalParams: any[]) {
    log(`${dayjs().format('YYYY-MM-DDTHH:mm:ss SSS')} INFO : ${message}`, ...optionalParams);
};
const debug = console.debug;
console.debug = function (message?: any, ...optionalParams: any[]) {
    debug(`${dayjs().format('YYYY-MM-DDTHH:mm:ss SSS')} DEBUG : ${message}`, ...optionalParams);
};
const error = console.error;
console.error = function (message?: any, ...optionalParams: any[]) {
    if (message instanceof Error) {
        error(`${dayjs().format('YYYY-MM-DDTHH:mm:ss SSS')} ERROR :`, message, ...optionalParams);
    } else {
        error(`${dayjs().format('YYYY-MM-DDTHH:mm:ss SSS')} ERROR : ${message}`, ...optionalParams);
    }

};

const warn = console.warn;
console.warn = function (message?: any, ...optionalParams: any[]) {
    warn(`${dayjs().format('YYYY-MM-DDTHH:mm:ss SSS')} WARN : ${message}`, ...optionalParams);
};
