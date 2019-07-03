const {connect} = require("./client");
const {setupInput} = require("./input");

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */

console.log('Connecting ...');

setupInput(connect());