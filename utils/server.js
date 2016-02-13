/**
 * Require Browsersync
 */
var browserSync = require('browser-sync').create();
var historyApiFallback = require('connect-history-api-fallback');

/**
 * Run Browsersync with server config
 */
browserSync.init({
  server: "dist",
  files: [
    {
      match: ["dist/*.html", "dist/css/*.css", "dist/**/*.js"],
      options: {
        ignored: 'dist/lib/**/*.*'
      }
    }
  ],
  middleware: [historyApiFallback()]
});