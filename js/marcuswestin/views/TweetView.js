module('from lib.javascript import Class');
module('import class .View');
module('import lib.dom as dom');

exports.TweetView = Class(View, function(supr) {
	
	
	this.init = function(factory, data) {
		supr(this, 'init', arguments);
		this._tweet = data;
	}
	
	this.createContent = function() {
		supr(this, 'createContent');
		this.loadStyles('marcuswestin-views-TweetView');
		
		var tweet = this._tweet;
		var img = dom.create({ className: 'profileImage', parent: this._element,
				type: 'img', src: tweet.profile_image_url });
		dom.create({ className: 'tweet', parent: this._element, text: tweet.text });
		
	}
	
})