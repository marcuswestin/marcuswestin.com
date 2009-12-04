module('from lib.javascript import Class');
module('import class ui.Element');
module('import lib.dom as dom')

exports.Layout = Class(ui.Element, function(supr) {

	this.createContent = function() {
		this.loadStyles('marcuswestin-Layout');
		
		dom.create({ parent: this._element, className: 'marginTop' });
		var marginLeft = dom.create({ parent: this._element, className: 'marginLeft' });
		dom.create({ parent: this._element, className: 'logo' });
		
		this._header = dom.create({ parent: marginLeft, className: 'header' });
		this._content = dom.create({ parent: marginLeft, className: 'content' });
		
		dom.create({ parent: this._header, className: 'slogan', html: 'marcus westin' });
	}
	
	this.getContent = function() { return this._content; }
	this.getHeader = function() { return this._header; }
})


