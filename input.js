//store the active TCP connection object 
let connection;

const setupInput = function(conn) {
  connection = conn;
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
  } else if (key === "w") {
    connection.write("Move: up");
  } else if (key === "s") {
    connection.write("Move: down");
  } else if (key === "a") {
    connection.write("Move: left");
  } else if (key === "d") {
    connection.write("Move: right");
  } else if (key === "l") {
    connection.write("Say: I WILL DEFEAT ISIS");
  }
}

module.exports = {setupInput};