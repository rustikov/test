let mix = require('laravel-mix');

mix
    .setPublicPath('dist')
    .js('js/app.js', 'dist')
    .sass('css/app.scss', 'dist/app.css');