const connect = require("./client");

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true); //read from key without pressing enter
  stdin.setEncoding('utf8');  //read text based on unicode
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
}

const handleUserInput = function(key) {
  if (key === "\u0003") { //ctrl + c
    process.exit();
  }
}

console.log('Connecting ...');
connect();