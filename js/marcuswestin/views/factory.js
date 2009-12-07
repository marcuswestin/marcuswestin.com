jsio('from lib.javascript import Singleton');
jsio('import .BlogPostExcerptView');
jsio('import .TweetView');

exports = Singleton(function() {
	
	this._viewConstructors = {
		'BlogPostExcerpt': BlogPostExcerptView,
		'Tweet': TweetView
	}
	
	this.getView = function(item) {
		return new this._viewConstructors[item.type](this, item.data);
	}
});