jsio('from lib.javascript import Class');
jsio('import .View');
jsio('import lib.dom as dom');

exports = Class(View, function(supr) {
	
	this.init = function(factory, data) {
		supr(this, 'init', arguments);
		this._tweet = data;
	}
	
	this.createContent = function() {
		supr(this, 'createContent');
		this.loadStyles('marcuswestin-views-TweetView');
		
		var tweet = this._tweet;
		var img = dom.create({ className: 'profileImage', parent: this._element,
				type: 'img', src: tweet.profile_image_url || 'http://a3.twimg.com/profile_images/379382059/n2904387_30962178_8468_normal.jpg' });
		dom.create({ className: 'tweet', parent: this._element, text: tweet.text });
	}
	
})