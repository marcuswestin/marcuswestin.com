module('from lib.javascript import Class');
module('import lib.Publisher');

exports.Element = Class(lib.Publisher, function() {
	
	this.getElement = function() {
		if (!this._element) { 
			this._createElement(); 
			this.createContent();
		}
		return this._element;
	}
	
	this.createContent = funtion() { throw "Abstract method"; }
})