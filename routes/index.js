
/*
 * GET home page.
 */
var path = require('path');
var fs = require('fs');

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.form = function(req, res){
  res.render('form', { title: 'Hello, World!' });
};

exports.upload = function(req, res){
	console.log(req.files);
	var tempPath = req.files.archivo.path,
        targetPath = './uploads/'+req.files.archivo.originalFilename
        fs.rename(tempPath, targetPath, function(err) {
            if (err) throw err;
  			  
        });
   
               res.writeHead(200, {'Content-Type': 'text/plain'});
               res.write("Ok")
               res.end();
};