const gulp = require('gulp');
const babel = require('gulp-babel');
 
gulp.task('babel', () => {
  return gulp.src('babel-es6/scripts.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('js'));
});


gulp.task('watch', function() {
  gulp.watch('babel-es6/scripts.js', ['babel']);
});


gulp.task('default', ['watch']);