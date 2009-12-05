module('from lib.javascript import Singleton');
module('import class .BlogPostExcerptView');
module('import class .TweetView');

exports.factory = Singleton(function() {
	
	this._viewConstructors = {
		'BlogPostExcerpt': BlogPostExcerptView,
		'Tweet': TweetView
	}
	
	this.getView = function(item) {
		console.log('getView', item);
		return new this._viewConstructors[item.type](this, item.data);
	}
});