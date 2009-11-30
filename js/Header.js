module('from lib.javascript import Class');
module('from ui.Element import Element as ui.Element');

console.log('test', ui.Element)

exports.Header = lib.Class(ui.Element, function(supr) {
	
	this.initialize = function() {
		console.log('here');
	}

})

