module('from lib.javascript import Class');
module('import class ui.TabContainer');

exports.TabContainer = Class(ui.TabContainer, function(){ 
	
	this.init = function() {
		console.log('initialize TabContainer');
	}
})

