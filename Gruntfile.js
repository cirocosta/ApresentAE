/** 
 * Here are defined all the tasks to be execute with GruntJS.
 */


/**
 * Importing the GruntJS module
 */

 module.exports = function(grunt) {
    'use strict';
 
    /**
     * Project configuration
     */
    var gruntConfig = {
        pkg: grunt.file.readJSON('package.json'),
        
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

        cssmin : {
            minify: {
                expand: true,
                cwd: 'appengine/static/css',
                src: '**/*.css',
                dest: 'appengine/static/build/css',
                ext: '.min.css'
            }
        },

        jshint: {
            all: ['appengine/static/js/*.js']
        }
    };
 
    grunt.initConfig(gruntConfig);
 
    /**
     * Inicializacao dos Plugins
     */
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    /**
     * Registro de Tarefas
     */
    grunt.registerTask('default', ['cssmin','jshint','uglify']);
};