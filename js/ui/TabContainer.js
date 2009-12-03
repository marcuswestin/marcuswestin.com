module('from lib.javascript import Class');
module('import class ui.Element');
module('import lib.strings');
module('import lib.css');

exports.TabContainer = Class(ui.Element, function(){ 
	
	this.init = function() {
		this._tabs = [];
	}
	
	this.createContent = function() {
		this.loadStyles('ui-TabContainer');
	}
	
	this.addTab = function(text) {
		var tab = this.getElement().appendChild(document.createElement('a'));
		lib.css.addClassName(tab, 'tab');
		tab.href = '#' + text.replace(/\s/g, '-');
		lib.strings.setText(tab, text);
	}
})

