exports.create = function(params) {
	var el = document.createElement(params.type || 'div');
	if (params.className) { el.className = params.className; }
	if (params.html) { el.innerHTML = params.html; }
	if (params.parent) { params.parent.appendChild(el); }
	return el;
}