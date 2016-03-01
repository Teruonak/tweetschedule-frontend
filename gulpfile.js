var gulp = require('gulp');
var webserver = require('gulp-webserver');

var paths = {
  temp: 'temp',
  index: 'app/index.html'
};

gulp.task('default', ['tempSetup','serve']);

gulp.task('tempSetup', function() {
  gulp.src(paths.index)
  .pipe(gulp.dest(paths.temp));
});

gulp.task('serve', function() {
  gulp.src(paths.temp)
  .pipe(webserver({
    open: true
  }));
});
