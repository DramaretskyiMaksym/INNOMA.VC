const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const pug = require('gulp-pug');

gulp.task ('css', ()=> {
  return gulp.src('./scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'))
})
gulp.task('pug', () => {
  return gulp.src('./pug/**/*.pug')
  .pipe(pug())
  .pipe(gulp.dest('./'))
})
gulp.watch("./scss/**/*.scss", gulp.series("css"));
gulp.watch("./pug/**/*.pug", gulp.series("pug"));
gulp.task("start", gulp.series('pug', 'css'));
