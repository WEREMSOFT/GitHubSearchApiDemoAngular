import config      from '../config';
import url         from 'url';
import browserSync from 'browser-sync';
import gulp        from 'gulp';
import sm          from '../util/middleware/static';
import gp          from '../util/middleware/gitProxy';

gulp.task('browserSync', function() {



  browserSync.init({
    server: {
      baseDir: config.buildDir,
      middleware: [gp, sm]
    },
  	port: config.browserPort,
  	ui: {
    	port: config.UIPort
    },
    ghostMode: {
      links: false
    }
  });

});
