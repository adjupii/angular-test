var
    gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),
    filter = require('gulp-filter'),
    mainBowerFiles = require('main-bower-files'),
    environments = require('gulp-environments'),
    angularFilesort = require('gulp-angular-filesort'),
    runSequence = require('run-sequence').use(gulp),
    connect = require('gulp-connect'),
    plumber = require('gulp-plumber'),

    NODE_ENV = process.env.NODE_ENV || 'development',

    development = environments.development;

gulp.task('connect', function() {
  connect.server();
});

gulp.task('vendors', function() {
  return gulp.src(mainBowerFiles(), {base: 'bower_components'})
    .pipe(filter('**/*.js'))
    .pipe(concat('vendors.js'))
    .pipe(uglify())
    .pipe(gulp.dest('build'))
  }
);

gulp.task('scripts', function() {
  return gulp.src([
      'app/**/*.js'
    ], {base: 'app'})
    .pipe(plumber())
    .pipe(development(sourcemaps.init()))
    .pipe(angularFilesort())
    .pipe(concat('scripts.js'))
    .pipe(uglify({mangle: false}))
    .pipe(development(sourcemaps.write()))
    .pipe(gulp.dest('build'));
  }
);

gulp.task('build', function() {
  NODE_ENV == 'development' ? runSequence('vendors', 'scripts', 'watch', 'connect') : runSequence('vendors', 'scripts', 'connect');
});

gulp.task('watch', function() {
  gulp.watch('app/**/*.js', ['scripts']);
});