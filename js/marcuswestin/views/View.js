module('from lib.javascript import Class');
module('import class ui.Element');

exports.View = Class(ui.Element, function(supr) {
	
	this.createContent = function() {
		this.loadStyles('marcuswestin-views-View');
	}
	
})