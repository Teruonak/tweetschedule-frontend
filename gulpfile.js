var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('default', function() {
  gulp.src('app/index.html')
  .pipe(gulp.dest('temp'));

  gulp.src('temp')
  .pipe(webserver({
    open: true
  }));
});
