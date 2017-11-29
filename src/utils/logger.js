//@flow
import * as JsLogger from 'js-logger';

export type LogLevelType = { [level: string]: {value: number, name: string} };

const LogLevel: LogLevelType = {
  "DEBUG": JsLogger.DEBUG,
  "INFO": JsLogger.INFO,
  "TIME": JsLogger.TIME,
  "WARN": JsLogger.WARN,
  "ERROR": JsLogger.ERROR,
  "OFF": JsLogger.OFF
};

JsLogger.useDefaults({defaultLevel: JsLogger.ERROR});

/**
 * get a logger
 * @param {?string} name - the logger name
 * @returns {Object} - the logger class
 */
function getLogger(name?: string): Object {
  if (!name) {
    return JsLogger;
  }
  return JsLogger.get(name);
}

/**
 * get the log level
 * @param {?string} name - the logger name
 * @returns {LogLevelType} - the log level
 */
function getLogLevel(name?: string): LogLevelType{
  return getLogger(name).getLevel();
}

/**
 * sets the logger level
 * @param {LogLevelType} level - the log level
 * @param {?string} name - the logger name
 * @returns {void}
 */
function setLogLevel(level: LogLevelType, name?: string): void{
  getLogger(name).setLevel(level);
}

export default getLogger;
export {LogLevel, getLogLevel, setLogLevel};
