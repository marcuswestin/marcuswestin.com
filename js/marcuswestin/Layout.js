module('from lib.javascript import Class, bind');
module('import class ui.Element');
module('import lib.dom as dom')
module('import lib.dimensions as dimensions')
module('from lib.events import events')

exports.Layout = Class(ui.Element, function(supr) {
	
	this.createContent = function() {
		this.loadStyles('marcuswestin-Layout');
		
		// Three sibling DOM structures:
		// a border on the left. Fixed width. Resizes height to viewport. Fixed position
		this._margin = dom.create({ parent: this._element, className: 'margin', style: { position: 'fixed' } });
		// a border on top and navigation elements. Fixed height. 100% width. Fixed position
		this._header = this.createHeader(); 
		// offset left and top by the margin and top. Height resizes with content
		this._content = dom.create({ parent: this._element, className: 'content' }); 

		events.add(window, 'resize', bind(this, 'onResize'));
		this.onResize();
	}
	
	this.createHeader = function() {
		var top = dom.create({ parent: this._element, className: 'top', style: { position: 'fixed', width: '100%' } });
		var borderTop = dom.create({ parent: top, className: 'border' });
		var logo = dom.create({ parent: top, className: 'logo' });
		var slogan = dom.create({ parent: top, className: 'slogan', html: 'marcus westin' });
		return dom.create({ parent: top, className: 'header' });
	}
	
	this.onResize = function() {
		this._margin.style.height = dimensions.getSize(window).height + 'px';
	}
	
	this.getContent = function() { return this._content; }
	this.getHeader = function() { return this._header; }
})


