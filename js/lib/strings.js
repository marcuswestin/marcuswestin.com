exports.setText = function(el, text) {
	el.innerHTML = '';
	el.appendChild(document.createTextNode(text));
}