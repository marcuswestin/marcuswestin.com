var sys = require('sys');
var posix = require('posix');
var file = require('file');

var htmlparser = require('../lib/htmlparser');

var bind = function(context, method/*, args... */) {
	var args = Array.prototype.slice.call(arguments, 2);
	return function(){
		method = (typeof method == 'string' ? context[method] : method);
		return method.apply(context, args.concat(Array.prototype.slice.call(arguments, 0)))
	}
}

function serialize(object, filename) {
	file.write(filename, JSON.stringify(object), 'ascii').wait();
}

function deserialize(filename, callback) {
	return JSON.parse(posix.cat(filename).wait())
}

var blogsDir = 'data/Blog/';
posix.readdir(blogsDir).addCallback(function generateBlogContent(entries) {
	var blogs = [];
	for (var i=0, entry; entry = entries[i]; i++) {
		var parts = entry.split('-');
		var date = parts.shift();
		var title = parts.join('-');
		if (posix.stat(blogsDir + entry).wait().isDirectory()) {
			var path = blogsDir + entry + '/content.html'
			sys.puts('read ' + path)
			var text = posix.cat(path).wait();
			blogs.push({ title: title, excerpt: HTMLtoXML(text.substr(0, 1000) + ' ...'), date: date, path: '/' + path });		
		}
	}
	sys.puts('Serialize data to ' + blogsDir + 'description.json');
	serialize(blogs, blogsDir + 'description.json');
});

