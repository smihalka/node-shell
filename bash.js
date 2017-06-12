var command = require('./command.js');
// Output a prompt
// console.log(process);
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var cmd = data.toString().trim(); // remove the newline
  var arr = cmd.split(" ");

  command[arr[0]](arr.slice(1));
  
  //process.stdout.write('\nprompt > ');

});
