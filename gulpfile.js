/**
 * Created by jacksay on 21/05/15.
 * Task runner
 */

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    directories = {
        src: {
          css: './src/assets/stylesheets/'
        },
        dist: {
          css: './dist/css/'
        }
    };


// Default task
gulp.task('default', ['sass', 'watch:sass']);


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
