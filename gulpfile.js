var gulp = require('gulp'),
    mocha = require('gulp-mocha'),
    expect = require('chai').expect,
    path = require('path'),
    sinon = require('sinon');

/*Set test globals*/
global.expect = expect;
global.root = path.join(__dirname, '/');
global.sinon = sinon;

gulp.task('test', function() {
  return gulp.src('tests/**/*.js')
    .pipe(mocha());
});

gulp.task('default', []);
