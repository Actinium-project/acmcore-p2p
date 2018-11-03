'use strict';

var gulp = require('gulp');
var acmcoreTasks = require('acmcore-build');

acmcoreTasks('p2p', {skipBrowser: true});

gulp.task('default', ['lint', 'coverage']);
