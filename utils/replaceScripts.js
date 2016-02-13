'use strict';

const fs = require('fs');
const path = require('path');
const files = require('./dependencies.js').filesToCopy;
const scriptPattern = '  <script type="text/javascript" src=""></script>';
const regex = /.*<!-- scripts:start -->([^]*)<!-- scripts:end -->/gmi;

fs.readFile('dist/index.html', 'utf-8', function (err, data) {

  const scripts = files.reduce(function (prev, file) {
    const scriptLine = scriptPattern.replace('src=""', 'src="' + 'lib/' +  path.basename(file) + '"')
    return prev + scriptLine + '\n';
  }, '');


  fs.writeFile('dist/index.html', data.replace(regex, scripts));

});