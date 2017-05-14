module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
	concat: {
		options: {
			separator: '\n',
		},
		dist: {
			src: ['src/start.js',
      'src/entities/player.js',
      'src/state/boot.js', 'src/state/load.js', 'src/state/menu.js', 'src/state/play.js',
      'src/core.js'],
			dest: 'dist/game.js',
		},
	},	
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('default', ['jshint', 'concat']);

};