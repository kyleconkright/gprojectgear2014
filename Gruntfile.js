module.exports = function(grunt) {

  // Project configuration.
  	grunt.initConfig({
	    pkg: grunt.file.readJSON('package.json'),

        sass: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'lib/scss',
                    src: ['*.scss'],
                    dest: 'tmp/css',
                    ext: '.css'
                }]
            }
        },
		cssmin: {
		  	combine: {
		    	files: {
		      		'tmp/stylemin.css': ['lib/vendor/slick.css','tmp/css/*.css']
		    	}
		  	}
		},
		autoprefixer: {
            dist: {
                files: {
                    'gprojectgear-8514657/assets/style.css.liquid':['tmp/stylemin.css']
                }
            }
        },
        coffee: {
          compile: {
	            files: {
	              	'tmp/script.js': 'lib/script.coffee'
	            }
          	}
     	},
     	uglify: {
      		my_target: {
      		    files: {
      		    	'gprojectgear-8514657/assets/script.js.liquid': ['lib/vendor/jquery.js','lib/vendor/shopify.api.jquery.js','lib/vendor/slick.min.js','tmp/script.js'],
      		    }
      		}
	    },
	    watch: {
	     	css: {
	        	files: ['lib/*.scss','lib/scss/*.scss'],
	        	tasks: ['sass','cssmin','autoprefixer'],
	        	options: {
	          		livereload: true,
	        	},
	      	},
	      	scripts: {
	      	    files: 'lib/*.coffee',
	      	    tasks: ['coffee','uglify']
	      	},
	    }

  	});

  // Load the plugin that provides the "uglify" task.

  	grunt.loadNpmTasks('grunt-contrib-uglify');
  	grunt.loadNpmTasks('grunt-contrib-sass');
  	grunt.loadNpmTasks('grunt-autoprefixer');
  	grunt.loadNpmTasks('grunt-contrib-coffee');
  	grunt.loadNpmTasks('grunt-contrib-watch');
  	grunt.loadNpmTasks('grunt-contrib-cssmin');

  	// Default task(s).
  	grunt.registerTask('default', ['uglify','sass','autoprefixer','coffee','watch','cssmin']);


};
