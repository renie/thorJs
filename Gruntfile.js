/*
 * ThorJs
 * https://github.com/renie/thorJs
 *
 * Copyright (c) 2014 Renie Siqueira
 * Licensed under the MPL, 2.0 licenses.
 */

module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		'remove':{
			options:{
				trace: true
			},
			fileList:['compiled/thor.all.js', 'compiled/thor.min.js']
		},
		'jshint': {
			all: ['Gruntfile.js', 'src/**/*.js']
		},
		'concat': {
			js: {
				src: [
					'src/thor.string.js',
					'src/thor.date.js',
					'src/thor.dom.js',
					'src/thor.validation.js'
				],
				dest: 'compiled/thor.all.js'
			}
		},
		uglify: {
			options: {
				mangle: false
			},
			my_target: {
				files: {
					'compiled/thor.min.js': ['compiled/thor.all.js']
				}
			}
		},
		'karma': {
			'simple': {
				'configFile': 'karmaConfigs/karma.simple.conf.js'
			},
			'src': {
				'configFile': 'karmaConfigs/karma.src.conf.js'
			},
			'all': {
				'configFile': 'karmaConfigs/karma.all.conf.js'
			},
			'min': {
				'configFile': 'karmaConfigs/karma.min.conf.js'
			},
			'standalone': {
				'configFile': 'karmaConfigs/karma.standalone.conf.js'
			},
			'alltravis': {
				'configFile': 'karmaConfigs/karma.all.travis.conf.js'
			},
			'mintravis': {
				'configFile': 'karmaConfigs/karma.min.travis.conf.js'
			},
			'standalonetravis': {
				'configFile': 'karmaConfigs/karma.standalone.travis.conf.js'
			}
		},
		'thorJS_builder': {
			options: {
				finalPath : 'compiled/',
				libName : 'Thor'
			},
			files:  ['compiled/thor.min.js']
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-remove');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-karma');
	grunt.loadNpmTasks('grunt-thorjs-builder');

	// without tests
	grunt.registerTask('default', ['remove','jshint','concat:js','uglify', 'karma:simple']);

	// with all tests
	grunt.registerTask('full', ['remove','jshint','karma:src','concat:js','karma:all','uglify','karma:min','thorJS_builder','karma:standalone']);

	// just tests
	grunt.registerTask('tests', ['karma:simple']);

	// with all tests
	grunt.registerTask('travis', ['remove','jshint','karma:simple','concat:js','karma:alltravis','uglify','karma:mintravis','thorJS_builder','karma:standalonetravis']);

	grunt.registerTask('build', ['thorJS_builder']);

};