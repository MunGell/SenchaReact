var gulp = require('gulp');
var util = require('gulp-util');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');
var sourcemaps = require('gulp-sourcemaps');
var browserify = require('browserify');
var watchify = require('watchify');
var babelify = require('babelify');
var uglify = require('gulp-uglify');

var onError = function (error) {
    util.log(error);
    this.emit('end');
};

var compile = function (watch) {
    var bundler = watchify(browserify('./components/index.js', { debug: true }).transform(babelify));

    function rebundle() {
        bundler.bundle()
            .on('error', onError)
            .pipe(source('components.js'))
            .pipe(buffer())
            .pipe(uglify()).on('error', onError)
            .pipe(sourcemaps.init({ loadMaps: true }))
            .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest('./'));
    }

    if (watch) {
        bundler.on('update', function() {
            util.log('bundling...');
            rebundle();
        });
    }

    rebundle();
};

var watch = function () {
    return compile(true);
};

gulp.task('build', function() { return compile(); });
gulp.task('watch', function() { return watch(); });

gulp.task('default', ['watch']);
