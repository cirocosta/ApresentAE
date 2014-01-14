/** 
 *  Here are defined all the tasks to be execute with GruntJS.
 */


/**
 *  Importing the GruntJS module
 */

 module.exports = function(grunt) {
    'use strict';
 
    /**
     *  Project configuration
     */
    var gruntConfig = {
        pkg: grunt.file.readJSON('package.json'),
        
        /**
         *  Configuration for the CSS minifier.
         *      banner: option tells what message that i want to
         *          put on every minified JS file.
         *      mangle: changes variables names to little ones
         *          so that the code gets smaller and unreadable  
         */
        uglify: {
            options: {
                mangle: true,
                banner: '/** ApresentAE! \n <%= pkg.author %> \n */ \n'
            },
            my_target: {
                files: [{
                    expand: true,
                    cwd: 'appengine/static/js',
                    src: '**/*.js',
                    dest: 'appengine/static/build/js',
                    ext: '.min.js'
                }]
            }
        },

        /**
         * Configuration for the CSS minifier.
         */
        cssmin : {
            minify: {
                expand: true,
                cwd: 'appengine/static/css',
                src: '**/*.css',
                dest: 'appengine/static/build/css',
                ext: '.min.css'
            }
        },
        /**
         * Configuration for the JSHint.
         * Here i just go through static/js files, that is,
         * not going to the minified ones. There's also the global
         * jQuery to be ignored.
         */
        jshint: {
            options: {
                globals: {
                    jQuery: true
                }
            },
            all: ['appengine/static/js/**/*.js']
        }
    };
 
    grunt.initConfig(gruntConfig);
 
    /**
     *  Inicializacao dos Plugins
     */
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    /**
     *  Registro de Tarefas
     */
    grunt.registerTask('default', ['jshint','cssmin','uglify']);
};