function useDefaults() {}

function getLevel() {}

function setLevel() {}

function log() {}

class Logger {
  log() {}
  debug() {}
}
function get() {
  return new Logger();
}

const ERROR = {name: ''};

export {useDefaults, get, log, getLevel, setLevel, ERROR};
