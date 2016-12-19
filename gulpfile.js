var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function() {
    gulp.src('./sass/*.sass')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./css/'));
});

gulp.task('connect', function(){
    connect.server({
        root: './',
        livereload: true
    });
});

gulp.task('livereload', function (){
    gulp.src('./')
    .pipe(connect.reload());
});

gulp.task('sass:watch', function() {
    gulp.watch('./sass/**/*.sass', ['sass']);
    gulp.watch('./**/*', ['livereload']);
});

gulp.task('default', ['sass:watch', 'sass', 'connect']);
