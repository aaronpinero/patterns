// this script collects the source js, minifies it, and outputs it as a single file to the dist folder

// module for minifying js
var Terser = require("terser");

// module to read/write files
var fs = require('fs');

// module to allow filtered search of directories
var glob = require("glob");

// get script paths
var scripts = new Array();
scripts.push(require.resolve('tyfy/dist/script/inview.js')); // inview from tyfy
scripts.push(require.resolve('jquery/dist/jquery.js')); // jquery
scripts.push(require.resolve('popper.js/dist/umd/popper.js')); // popper
scripts.push(require.resolve('bootstrap/dist/js/bootstrap.js')); // bootstrap
var patternscripts = glob.sync("./source/patterns/**/*.js");
scripts = scripts.concat(patternscripts);

// variable to hold js
var allscripts = '';

// concatenate scripts
scripts.forEach(element => allscripts += (fs.readFileSync(element,"utf8") + "\n"));

// export distribution js
fs.writeFileSync('./dist/js/patterns.min.js',Terser.minify(allscripts).code);