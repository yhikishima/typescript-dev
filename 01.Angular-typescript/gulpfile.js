var gulp   = require('gulp');
var watch  = require('gulp-watch');
var tsd    = require("gulp-tsd");
var ts     = require('gulp-typescript');
var tsify    = require("tsify");
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var sourcemaps = require('gulp-sourcemaps');

// tsd task
gulp.task("tsd", function (callback) {
  tsd({
    command: "reinstall",
    config: "tsd.json"
  }, callback);
});

// typescript task
// gulp.task('ts', function(){
//   gulp.src(['src/ts/**/*.ts'])
//     .pipe(ts({
//       target : 'ES5',
//       removeComments: true,
//       out: 'app.js'
//     }))
//     .js
//     // ファイルをひとまとめに
//     .pipe(gulp.dest('dist/js/'));
// });

// tsify task
gulp.task('tsify', function(){
  browserify()
    .add('src/ts/app.ts')
    .plugin('tsify', {
      removeComments: true,
      noImplicitAny: true
    })
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('dist/js'))
});


// browserify task
// gulp.task('browserify', function(){
//   return browserify({
//       entries: 'src/js/main.js',
//       debug: true
//     })
//     .bundle()
//     .pipe(source('bundle.js'))
//     .pipe(buffer())
//     .pipe(sourcemaps.init({loadMaps: true}))
//     .pipe(sourcemaps.write('./'))
//     .pipe(gulp.dest(
//       'dist/js/'
//     ));
// });

// watch task
gulp.task('watch', function () {
  watch('src/ts/**/*.ts', function () {
    gulp.start(['tsify']);
  });

  // watch('src/js/**/*.js', function () {
  //   gulp.start(['browserify']);
  // });
});

// serve task
gulp.task('serve', ['watch', 'tsify']);

