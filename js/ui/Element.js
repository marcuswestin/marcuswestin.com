module('from lib.javascript import Class');
module('import class lib.Publisher');
module('import lib.css');

exports.Element = Class(lib.Publisher, function(supr) {
	
	this.init = function() {
		supr(this, 'init');
	}
	
	this.getElement = function() {
		if (!this._element) { 
			this._element = document.createElement('div');
			this.createContent();
		}
		return this._element;
	}

	this.createContent = function() {} // abstract method

	this.loadStyles = function(componentName) {
		lib.css.addClassName(this._element, componentName);
		lib.css.loadStyle(componentName.split('-').join('/'));
	}
})