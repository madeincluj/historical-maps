module.exports = function(grunt) {

	grunt.initConfig({
		yaml: {
			maps: {
				files: [{
					expand: true,
					cwd: 'metadata/',
					src: ['*.yaml'],
					dest: 'json/'
				}]
			}
		}
	});

	grunt.loadNpmTasks('grunt-yaml');
	grunt.registerTask('metadata', 'Compile maps metadata from YAML source', ['yaml:maps']);
};