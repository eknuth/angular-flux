/* https://truongtx.me/2014/08/06/using-watchify-with-gulp-for-fast-browserify-build/ */

var gulp = require('gulp');
var browserify = require('browserify');
var source = require("vinyl-source-stream");
var watchify = require('watchify');

var watch;

gulp.task('browserify-nowatch', function(){
  watch = false;
  browserifyShare();
});

gulp.task('browserify-watch', function(){
  watch = true;
  browserifyShare();
});

function browserifyShare(){
  var b = browserify({
    cache: {},
    packageCache: {},
    fullPaths: true
  });

  if(watch) {
    b = watchify(b);
    b.on('update', function(){
      bundleShare(b);
    });
  }

  b.add('./src/js/main.js');
  bundleShare(b);
}

function bundleShare(b) {
  b.bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./dist'))
}

gulp.task('copy', function() {
    gulp.src('src/index.html')
      .pipe(gulp.dest('dist'));
});

gulp.task('watch', ['browserify-watch', 'copy']);
gulp.task('default', ['browserify-nowatch', 'copy'])
