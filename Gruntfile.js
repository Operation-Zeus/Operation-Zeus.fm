module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    ngAnnonate: {
      options: {
        add: true,
      },
      app: {
        files: {
          'assets/build/js/<%= pkg.name %>.js' : 'assets/src/js/*.js'
        }
      }
    },
    babel: {
      options: {
        sourceMap: false,
        presets: ['es2015']
      },
      dist: {
        files: {
          'assets/build/js/<%= pkg.name %>.js' : 'assets/build/js/<%= pkg.name %>.js'
        }
      }
    },
    uglify: {
      options: {
        mangle: true,
        compress: true,
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'assets/build/js/<%= pkg.name %>.js',
        dest: 'assets/build/js/<%= pkg.name %>.min.js'
      }
    },
    less: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
        plugins: [
          new (require('less-plugin-clean-css'))
        ]
      },
      style: {
        files: {
          'assets/build/css/master.min.css': 'assets/src/css/main.less'
        }
      }
    },
    watch: {
      js: {
        files: ['assets/src/js/*.js'],
        tasks: ['ngAnnonate', 'babel', 'uglify']
      },
      css: {
        files: 'assets/src/css/*.less',
        tasks: ['less']
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-ng-annotate');

  // Default task(s).
  grunt.registerTask('default', ['watch']);
};
