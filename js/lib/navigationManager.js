module('from lib.javascript import Singleton, bind');
module('import class lib.Publisher');
module('import lib.xhr as xhr');

exports.navigationManager = Singleton(lib.Publisher, function(supr) {
	
	this.init = function() {
		supr(this, 'init');
		setInterval(bind(this, '_checkLocation'), 50);
	}
	
	this._checkLocation = function() {
		if (document.location.hash == this._lastLocation) { return; }
		this.navigateTo(document.location.hash);
	}
	
	this.navigateTo = function(location) {
		this._lastLocation = location;
		var destination = 'navigate.php?path=' + location.substr(1);
		xhr.getJSON(destination, bind(this, 'publish', 'Navigate', destination));
	}
})