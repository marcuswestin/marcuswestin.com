jsio('from lib.javascript import Class');
jsio('import class ui.Element');

exports.BioView = Class(ui.Element, function(supr) {
	
	this.render = function(html) {
		this.getElement().innerHTML = html;
	}
	
})