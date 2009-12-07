jsio('from lib.javascript import Class');
jsio('import ui.Element');
jsio('import lib.strings');
jsio('import lib.css');

exports = Class(ui.Element, function(){ 
	
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

