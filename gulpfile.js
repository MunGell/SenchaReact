var gulp = require('gulp');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var util = require('gulp-util');

var onError = function (error) {
    util.log(error);
    this.emit('end');
};

gulp.task('build-components', function () {
    return gulp.src('./components/**/*.js')
        .pipe(babel())
        .pipe(concat('components.js'))
        .pipe(gulp.dest('.'))
});

gulp.task('watch-components', function() {
    gulp.watch('./components/**/*.js', ['build-components']);
});
