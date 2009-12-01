module('from lib.javascript import Class');
module('import lib.strings');

exports.TabContainer = Class(function(){ 
	
	this.init = function() {
		this._tabs = [];
	}
	
	this.createContent = function() {
		this.loadStyles('ui.TabContainer');
	}
	
	this.addTab = function(text) {
		this.create();
		var tab = this._element.appendChild(document.createElement('a'));
		a.href = '#' + text.replace(/\s/g, '-');
		lib.strings.setText(a, text);
	}
})

