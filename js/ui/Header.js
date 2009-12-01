module('from lib.javascript import Class');
module('import class ui.Element');
module('import lib.css');

exports.Header = Class(ui.Element, function(supr) {
	
	this.createContent = function() {
		this.loadStyles('ui.Header');
	}
})

