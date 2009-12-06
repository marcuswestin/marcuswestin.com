module('from lib.javascript import Class, bind');
module('import class ui.Element');
module('import lib.dom as dom')
module('import lib.dimensions as dimensions')
module('from lib.events import events')

exports.Layout = Class(ui.Element, function(supr) {
	
	this.createContent = function() {
		this.loadStyles('marcuswestin-Layout');
		
		dom.create({ parent: this._element, className: 'marginTop' });
		this._marginLeft = dom.create({ parent: this._element, className: 'marginLeft' });
		dom.create({ parent: this._element, className: 'logo' });
		
		this._header = dom.create({ parent: this._marginLeft, className: 'header' });
		this._content = dom.create({ parent: this._marginLeft, className: 'content' });
		
		dom.create({ parent: this._header, className: 'slogan', html: 'marcus westin' });
		
		events.add(window, 'resize', bind(this, 'onResize'));
		this.onResize();
	}
	
	this.onResize = function() {
		var windowSize = dimensions.getSize(window);
		var contentSize = dimensions.getSize(this._content);
		var contentPos = dimensions.getPosition(this._content);
		this._marginLeft.style.height = Math.max(windowSize.height, contentSize.height + contentPos.top) + 'px';
	}
	
	this.getContent = function() { return this._content; }
	this.getHeader = function() { return this._header; }
})


