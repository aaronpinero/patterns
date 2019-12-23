// module to read/write files
var fs = require('fs');

// include glob for filtered traverse of directory
var glob = require("glob");

// include sass for compiling sass to css
var sass = require('node-sass');

// for post-processing the css
var autoprefixer = require('autoprefixer');
var postcss = require('postcss');

// variable that will hold the contents of the concatenated scss
var scss = '';

// get stylesheets paths
var stylesheets = new Array();
var patternstyles = glob.sync("./source/patterns/**/*.scss");
stylesheets.push(require.resolve('tyfy-bootstrap/dist/style/tyfy-bootstrap.css')); // tybs
stylesheets = stylesheets.concat(patternstyles);

// concatenate styles
stylesheets.forEach(element => scss += (fs.readFileSync(element,"utf8") + "\n"));

// render the scss as css
sass.render({
  data: scss,
  sourceComments: true
}, function(err, sassresult) {
	if (err) throw err;
  postcss([autoprefixer])
    .process(sassresult.css,{from:undefined})
    .then(result => {
      fs.writeFile('./dist/css/patterns.css', result.css, () => true);
      if ( result.map ) {
        fs.writeFile('./dist/css/patterns.css.map', result.map, () => true);
      }
    });
});