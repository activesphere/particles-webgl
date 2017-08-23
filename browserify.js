var fs = require('fs');
var browserify = require('browserify');
var watchify = require('watchify');
var browserifyShader = require('browserify-shader');
 
var b = browserify({
  entries: ['./js/Main.js'],
  cache: {},
  packageCache: {},
  plugin: [watchify, browserifyShader]
});
b.transform(browserifyShader);
b.on('update', bundle);
bundle();
 
function bundle() {
  b.bundle()
  .on('error', function(err) {
    console.log('Error in Browserify: ');
    console.log(err);
  })
  .pipe(fs.createWriteStream('js/bundle.js'));
}
