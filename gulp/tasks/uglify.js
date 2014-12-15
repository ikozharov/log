var gulp   = require('gulp');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");
var config = require('../config').compress;

gulp.task('uglify', function() {
  gulp.src(config.src)
    .pipe(uglify())
    .pipe(rename(config.name))
    .pipe(gulp.dest(config.dest));
});
