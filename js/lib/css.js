exports.addClassName = function(element, className) {
	if (!(' ' + element.className + ' ').match(' ' + className + ' ')) {
		element.className += ' ' + className;
	}
}

var base = '/css/';
exports.loadStyle = function(path) {
	var link = document.createElement('link');
	link.rel = 'stylesheet';
	link.type = 'text/css';
	link.href = base + path + '.css';
	document.getElementsByTagName('head')[0].appendChild(link);
}