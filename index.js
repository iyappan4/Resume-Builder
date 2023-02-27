
var fs = require('fs');
var pdf = require('html-pdf');
var html = fs.readFileSync('resume.html', 'utf8');
var options = { format: 'Latter' };

pdf.create(html, options).toFile('newa44.pdf', function(err, res) {
  if (err) return console.log(err);
  console.log(res); 
});