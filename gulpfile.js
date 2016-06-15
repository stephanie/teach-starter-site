var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function() {
    gulp.src('public/styles/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/styles/css/'))
});

//Watch task
gulp.task('default',function() {
    gulp.watch('public/styles/sass/**/*.scss',['styles']);
});