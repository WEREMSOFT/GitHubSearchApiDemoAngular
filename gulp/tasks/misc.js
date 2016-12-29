import config      from '../config';
import changed     from 'gulp-changed';
import gulp        from 'gulp';
import browserSync from 'browser-sync';

gulp.task('misc', function() {

  return gulp.src(config.misc.src)
    .pipe(changed(config.misc.dest)) // Ignore unchanged files
    .pipe(gulp.dest(config.misc.dest))
    .pipe(browserSync.stream());

});
