var gulp   = require('gulp');
var watch  = require('gulp-watch');
var tsd    = require("gulp-tsd");
var ts     = require('gulp-typescript');
var tsify    = require("tsify");
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var sourcemaps = require('gulp-sourcemaps');


var Dgeni = require('dgeni');
var lodash = require('lodash');

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
      removeComments: false,
      noImplicitAny: true
    })
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('dist/js'))
});

// ngdoc task
// gulp.task('ngdocs', [], function () {
//   var options = {
//     html5Mode: true,
//     startPage: '/api',
//     title: "My Angular Docs",
//     image: "",
//     imageLink: "",
//     titleLink: "/api"
//   }
// return gulp.src('dist/js/*.js')
//     .pipe(ngdocs.process(options))
//     .pipe(gulp.dest('./docs'));
// });

gulp.task('dgeni', function() {
  try {
    var dgeni = new Dgeni([require('./docs/dgeni-example')]);
    return dgeni.generate();
  } catch(x) {
    console.log(x.stack);
    throw x;
  }
});


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

