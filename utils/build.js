'use strict';

const fs = require('fs'),
  path = require('path'),
  _ = require('lodash');

const ROOT_PATH = '';

const files = require('./dependencies.js').filesToCopy;

fs.mkdir('dist/lib', _.noop);

copyLibFiles();

function clearLib() {
  fs.readdir(ROOT_PATH + 'dist/lib/', function (err, files) {
    files.forEach((file) => fs.unlinkSync(ROOT_PATH + 'dist/lib/' + file))
  });
}

function copyFile(file) {
  const filename = path.basename(file);
  fs.createReadStream(file).pipe(fs.createWriteStream(ROOT_PATH + 'dist/lib/' + filename));
}

function copyLibFiles() {
  files.forEach((file) => copyFile(ROOT_PATH + file));
}

function clearJs(dir) {
  fs.readdir(dir, function (err, files) {
    files.forEach((file) => {
      if (fs.lstatSync(dir + file).isDirectory()) {
        clearJs(dir + file + '/');
        return;
      }
      if (_.includes(['.js', '.map'], path.extname(file))) {
        fs.unlinkSync(dir + file);
      }
    });
  });
}

function copyJs(dir) {
  fs.readdir(dir, function (err, files) {
    files.forEach((file) => {
      if (fs.lstatSync(dir + file).isDirectory()) {
        copyJs(dir + file + '/');
        return;
      }
      if (_.includes(['.js', '.map'], path.extname(file))) {
        copyFile(dir + file);
      }
    });
  });
}
