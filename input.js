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

module.exports = setupInput;