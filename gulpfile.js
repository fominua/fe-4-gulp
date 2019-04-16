var gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
var sass = require('gulp-sass');
let cleanCSS = require('gulp-clean-css');
const image = require('gulp-image');

sass.compiler = require('node-sass');

gulp.task('html', function() {
    return gulp.src('src/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist'));
});

gulp.task('scss', function() {
    return gulp.src('src/styles/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('images', function() {
    return gulp.src('src/images/*.*')
        .pipe(image())
        .pipe(gulp.dest('dist/images'));
});

gulp.task('build', ['html', 'scss']);

gulp.task('watch', function() {
    gulp.watch('src/**/*.*', ['build']);
});

gulp.task('default', ['build', 'watch']);

