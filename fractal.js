'use strict';

const fractal = module.exports = require('@frctl/fractal').create();

fractal.set('project.title', 'TyBs Patterns');
fractal.set('project.version', 'v1.0');
fractal.set('project.author', 'Aaron Pinero');

fractal.components.set('path', __dirname + '/source/patterns');
fractal.components.set('default.preview', '@preview');

fractal.docs.set('path', __dirname + '/source/patterns_guide');

fractal.web.set('static.path', __dirname + '/dist');
fractal.web.set('builder.dest', __dirname + '/docs');