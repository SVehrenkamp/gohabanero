module.exports = function(grunt) {

  // Loads the necessary tasks for this Grunt file.
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  var _ref, _ref1, _ref2;

  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    banner: "/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ",
    baseDir: grunt.option('dir') || "dev",
    express: {
      options: {
        cmd: process.argv[0],
        port: 3000
      },
      dev: {
        options: {
          script: "server/server.js"
        }
      }
    },
    dev: {
      files: {
        base: "http://localhost:3000/",
        dir: (_ref1 = grunt.option('dir')) != null ? _ref1 : "",
        css: "client/css/main.css"
      }
    },
    files: {
      html: {},
      sass: {
        src: ["client/css/main.css"]
      },
      js: {}
    },
    copy: {
      main: {
        files: []
      }
    },
    concat: {
      js: {
        src: [
          'client/js/vendor/angular/angular.min.js', 
          'client/js/vendor/angular-ui-router/release/angular-ui-router.min.js', 
          'client/js/vendor/angular-animate/angular-animate.min.js',
          'client/js/vendor/jquery/dist/jquery.min.js',
          'client/js/vendor/color.js',
          'client/js/vendor/underscore/underscore-min.js',
          'client/js/app.js',
          'client/js/services/cart.service.js',
          'client/js/services/session.service.js',
          'client/js/controllers/checkout.controller.js',
          'client/js/controllers/shop.controller.js',
          'client/js/controllers/mini_cart.controller.js',
          'client/js/controllers/cart.controller.js',
          'client/js/controllers/confirm.controller.js',
          'client/js/controllers/dashboard.controller.js',
          'client/js/controllers/login.controller.js',
          'client/js/controllers/order.controller.js'
        ],
        dest: 'client/js/bundle.js',
      },
    },
    sass: {
      dist: {
        options: {
          style: 'compressed',
          noCache: true
        },
        files: [
          {
            expand: true,
            cwd: 'client/css',
            src: ['main.scss'],
            dest: 'client/css',
            ext: '.css'
          }
        ]
      }
    },
    watch: {
      options: {
        livereload: true
      },
      express: {
        files: ['server/server.js'],
        options: {
          spawn: true
        }
      },
      sass: {
        files: ["*/css/main.scss"],
        tasks: ["sass"],
        options: {
          spawn: true
        }
      }
    },
    server: {
      base: "" + (process.env.SERVER_BASE || 'public'),
      web: {
        port: 3000
      }
    }

  });
  //grunt.option
  //grunt.loadTasks("tasks");

  grunt.registerTask('default', ['express:dev', 'sass', 'concat', 'watch:sass']);
  //grunt.registerTask('subscriptions', ['express:dev', 'sass:subscriptions', 'watch:sass']);
  // grunt.registerTask("deploy", ["clean", "updateConfig", "sass", "requirejs", "copy:main", "sftp-deploy:config", "http", "sftp-deploy:build", "express:dev", "open", "watch"]);
  
};