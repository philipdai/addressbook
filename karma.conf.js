module.exports = function(config) {
	config.set({
		browsers: ['PhantomJS'],
		frameworks: ['mocha'],
		files: [
			"bower_components/angular/angular.js",
			"bower_components/chai/chai.js",
//			"bower_components/mocha/mocha.js",
			"app/**/*.js",		
			"test/*.js"
		]
	});
};