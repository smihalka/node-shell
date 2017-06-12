var fs = require('fs');

module.exports.pwd = function (){
	process.stdout.write(process.cwd());
	process.stdout.write('\nprompt > ');
};

module.exports.date = function (){
	process.stdout.write(Date());
	process.stdout.write('\nprompt > ');
};

module.exports.ls = function (){

	fs.readdir('.', function(err, files) {
  		if (err) throw err;
  		files.forEach(function(file) {
  			process.stdout.write(file.toString() + "\n");
    	})
    	process.stdout.write("prompt > ");
 	});
};

module.exports.echo = function(arr){
	process.stdout.write(arr.join(" ") + "\n");
	process.stdout.write("prompt > ");
};

module.exports.cat = function(arr){

	fs.readFile(arr[0], 'utf8', function(err, data){
		  if (err) throw err;
			process.stdout.write(data);
	});
	setTimeout(function () {
  	process.stdout.write("prompt > ")
	}, 500);
};


module.exports.head = function(arr){
	var array = [];
	fs.readFile(arr[0], 'utf8', function(err, data){
		  if (err) throw err;
				//process.stdout.write(data);
				var arrayData = data.split("\n");
			for(var i = 0; i < 5;i++){
			 	process.stdout.write(arrayData[i] + "\n");
			 }
		});

	setTimeout(function () {
  	process.stdout.write("prompt > ")
	}, 1000);
};
