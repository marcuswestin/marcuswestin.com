jsio('from lib.javascript import Class');
jsio('import .View');
jsio('import lib.dom as dom');

exports = Class(View, function(supr) {
	
	this.init = function(factory, data) {
		supr(this, 'init', arguments);
		this._blogPost = data;
	}
	
	this.createContent = function() {
		supr(this, 'createContent');
		this.loadStyles('marcuswestin-views-BlogPostExcerptView');
		
		var post = this._blogPost;
		dom.create({ className: 'title', parent: this._element, text: post.title });
		dom.create({ className: 'excerpt', html: post.excerpt });
	}
	
})