/*
 * assemble-examples <https://github.com/assemble/assemble-examples>
 *
 * Copyright (c) 2014 Jon Schlinkert, Brian Woodward, contributors.
 * Licensed under the MIT license.
 */


module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({
    assemble: {
      options: {
        flatten: true,
        partials: ['templates/includes/*.hbs'],
        layoutdir: 'templates/layouts',
        layout: 'default.hbs'
      },
      site: {
        files: { 'dest/': ['templates/*.hbs'] }
      }
    },
    connect: {
      server: {
        keepalive:true,
        options: {
          base: './dest',
          port: 3000,
          //livereload: true,
          open: true
        }
      },
      keepalive:true
    }
  });

  // Load the Assemble plugin.
  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('grunt-contrib-connect');

  // The default task to run with the `grunt` command.
  grunt.registerTask('default', ['assemble', 'connect:server:keepalive']);
};
