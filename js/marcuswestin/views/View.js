jsio('from lib.javascript import Class, bind');
jsio('import ui.Element');
jsio('import lib.events as events');
jsio('import lib.css');

exports = Class(ui.Element, function(supr) {
	
	this.createContent = function() {
		this.loadStyles('marcuswestin-views-View');
		events.add(this._element, 'mouseover', bind(this, 'addClassName', 'marcuswestin-views-View-hot'));
		events.add(this._element, 'mouseout', bind(this, 'removeClassName', 'marcuswestin-views-View-hot'));
	}
	
})