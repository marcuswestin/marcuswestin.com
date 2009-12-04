module('from lib.javascript import Class');
module('import class ui.Element');

exports.BioView = Class(ui.Element, function(supr) {
	
	this.render = function(html) {
		this.getElement().innerHTML = html;
	}
	
})