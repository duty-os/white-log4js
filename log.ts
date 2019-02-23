import * as dayjs from "dayjs";

const log = console.log;
console.log = console.info = function (message?: any, ...optionalParams: any[]) {
    //2019-02-22 19:09:49.281  INFO 61119 --- [  restartedMain] com.herewhite.audio.AudioApplication     : No active profile set, falling back to default profiles: default
    log(`${dayjs().format('YYYY-MM-DDTHH:mm:ss SSS')} INFO : ${message}`, ...optionalParams);
};
const debug = console.debug;
console.debug = function (message?: any, ...optionalParams: any[]) {
    //2019-02-22 19:09:49.281  INFO 61119 --- [  restartedMain] com.herewhite.audio.AudioApplication     : No active profile set, falling back to default profiles: default
    debug(`${dayjs().format('YYYY-MM-DDTHH:mm:ss SSS')} DEBUG : ${message}`, ...optionalParams);
};
const error = console.error;
console.error = function (message?: any, ...optionalParams: any[]) {
    //2019-02-22 19:09:49.281  INFO 61119 --- [  restartedMain] com.herewhite.audio.AudioApplication     : No active profile set, falling back to default profiles: default
    error(`${dayjs().format('YYYY-MM-DDTHH:mm:ss SSS')} ERROR :`, message, ...optionalParams);
};

const warn = console.warn;
console.warn = function (message?: any, ...optionalParams: any[]) {
    //2019-02-22 19:09:49.281  INFO 61119 --- [  restartedMain] com.herewhite.audio.AudioApplication     : No active profile set, falling back to default profiles: default
    warn(`${dayjs().format('YYYY-MM-DDTHH:mm:ss SSS')} WARN : ${message}`, ...optionalParams);
};
