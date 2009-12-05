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
		var destination = location.substr(1);
		
		var pending = 1;
		
		var results = [];
		var onResponse = bind(this, function(items) {
			results.concat(items);
			if (!--pending) { this.publish('Navigate', location.substr(1), results); }
		});
		
		if (destination == 'Latest' || destination == 'Twitter') {
			pending += 2;
			function onTweets(response) { onResponse(response.results); }
			twitter.getMentions('marcuswestin', onTweets);
			twitter.getTimeline('marcuswestin', onTweets);
		}
		
		xhr.getJSON('navigate.php?path=' + destination, onResponse);
	}
})