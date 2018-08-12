var gulp = require('gulp'),
browserify = require('gulp-browserify'),
concatCss = require('gulp-concat-css'),
run = require('gulp-run');

var src = './process',
app = './app';

gulp.task('html', function() {
gulp.src( src + '/**/*.html');
});

gulp.task('watch', ['serve'], function() {
gulp.watch( src + '/js/**/*', ['js']);
gulp.watch( src + '/css/**/*.css', ['css']);
gulp.watch([ app + '/**/*.html'], ['html']);
});

gulp.task('serve', ['html'], function() {
run('electron app/main.js').exec();
});

gulp.task('default', ['watch', 'serve']);