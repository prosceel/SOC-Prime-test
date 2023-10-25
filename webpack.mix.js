// webpack.mix.js

let mix = require('laravel-mix');

mix.js('src/js/index.js', 'dist/').sass('src/scss/index.scss', 'dist/');