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
stylesheets.push(require.resolve('tyfy-bootstrap/source/scss/tyfy-bootstrap.scss')); // tybs
stylesheets = stylesheets.concat(patternstyles);

// concatenate scripts
stylesheets.forEach(element => scss += (fs.readFileSync(element,"utf8") + "\n"));

// write a temporary file that contains all the scss
fs.writeFileSync('./dist/css/patterns.scss',scss);

// render the scss as css
sass.render({
  file: './dist/css/patterns.scss',
  sourceComments: true
}, function(err, result) {
	if (err) throw err;

	// write the rendered css
	fs.writeFileSync('./dist/css/patterns.temp.css',result.css);

	// remove temporary file
	fs.unlinkSync('./dist/css/patterns.scss');
});
 
fs.readFile('./dist/css/patterns.temp.css', (err, css) => {
  postcss([autoprefixer])
    .process(css, { from: './dist/css/patterns.temp.css', to: './dist/css/patterns.css' })
    .then(result => {
      fs.writeFile('./dist/css/patterns.css', result.css, (err) =>
        if (err) throw err;
        fs.unlink('./dist/css/patterns.temp.css');
      );
      if ( result.map ) {
        fs.writeFile('./dist/css/patterns.css.map', result.map, () => true);
      }
    });
});