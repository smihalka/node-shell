// Output a prompt
// console.log(process);
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var cmd = data.toString().trim(); // remove the newline
  if(cmd === 'pwd'){
    process.stdout.write(process.cwd());
  }
  if(cmd === 'date'){
    let time =  Date();
    process.stdout.write(time);
  }
  if(cmd = "hello"){
    process.stdout.write("Hello Fullstakck Peoples");
  }

  process.stdout.write('\nprompt > ');

});
