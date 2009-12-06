module('from lib.javascript import Class, bind');
module('import class ui.Element');
module('from lib.events import events');
module('import lib.css');

exports.View = Class(ui.Element, function(supr) {
	
	this.createContent = function() {
		this.loadStyles('marcuswestin-views-View');
		events.add(this._element, 'mouseover', bind(this, 'addClassName', 'marcuswestin-views-View-hot'));
		events.add(this._element, 'mouseout', bind(this, 'removeClassName', 'marcuswestin-views-View-hot'));
	}
	
})