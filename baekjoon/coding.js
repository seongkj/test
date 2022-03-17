const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input;
rl.on("line", (line) => { 
    input = line.split(' ');
    rl.close();
});
rl.on('close', () => {
    console.log(input[0]-input[1]);
})