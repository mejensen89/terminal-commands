const fs = require('fs')

module.exports.ls = () => {
  fs.readdir('./', (err, files) => {
    const filesToString = files.reduce((acc, file) => {
      return `${acc} ${file} `;
    }, '');

    console.log(filesToString);
  });
};

module.exports.touch = () => {
  fs.writeFile('hello-world.txt','Hello to this great world!', 'utf8', function
  		(err){ if (err) throw err;
  		console.log('File Created!');
  		});
};

module.exports.mkdir = () => {
  fs.mkdir('directory', function(err){
  	if (err) throw (err);
  	console.log("directory created!");
  });
};