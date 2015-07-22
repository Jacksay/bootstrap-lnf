/**
 * Created by jacksay on 21/05/15.
 * Task runner
 */

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    webserver = require('gulp-webserver'),
    // --- Configuration du serveur
    config = {
      server: {
        port: 4000
      }
    },
    directories = {
        src: {
          css: './src/assets/stylesheets/'
        },
        dist: {
          css: './dist/css/'
        }
    };


// Default task
gulp.task('default', ['sass', 'watch:sass', 'serve']);

////////////////////////////////////////////////////////////////////////////////
//
// SASS
//
////////////////////////////////////////////////////////////////////////////////
/**
 * Tâche permettant de compiler les fichiers SASS.
 *
 * Utilisation
 *
 * ```
 * $ gulp sass
 * ```
 */
gulp.task('sass', function () {
    gulp.src(directories.src.css + '**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest(directories.dist.css));
});

gulp.task('watch:sass', function () {
    gulp.watch(directories.src.css + '**/*.scss', ['sass']);
});

////////////////////////////////////////////////////////////////////////////////
//
// SERVER
//
////////////////////////////////////////////////////////////////////////////////
gulp.task('serve', function () {
  gulp.src('dist')
    .pipe(webserver({
      fallback: 'demo/demo.html',
      livereload: true,
      directoryListing: false,
      open: true
    }));
});
