'use strict'
module.exports = {
    src: {

        sass: [
            'src/style/main.scss',
            'node_modules/normalize.css/normalize.css'
        ],
        js: ['node_modules/jquery/dist/jquery.js',
            'src/js/main.js',


        ],
    /*    script: [
            'node_modules/jquery/dist/jquery.js',
            'node_modules/bootstrap/dist/js/bootstrap.min.js'
        ],*/
        cssLibs: [
            'node_modules/normalize.css/normalize.css'
        ],
        img: 'src/img/**/*.*',
        html: 'index.html'

    },

    autoprefixer: [
        'last 2 versions',
        '> 1%',
        'ie 9'
    ],

    browserSyncConfig: {
        server: {
            baseDir: "./"
            // index: "index.html"
        }
        // notify: true
    },

    dest: {
        css: 'build/css',
        js: 'build/js',
        img: 'build/images'
    },

    maps: '../maps',

    watchSass: 'src/style/**/*.scss',
    watchHtml: 'index.html',
    watchJS: 'src/js/**/*.js'

};
