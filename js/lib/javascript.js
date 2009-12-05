
exports.bind = function(context, method/*, args... */) {
	var args = Array.prototype.slice.call(arguments, 2);
	return function(){
		method = (typeof method == 'string' ? context[method] : method);
		return method.apply(context, args.concat(Array.prototype.slice.call(arguments, 0)))
	}
}

exports.Class = function(parent, proto) {
	if(!proto) { proto = parent; }
	proto.prototype = parent.prototype;
	
	var cls = function() { if(this.init) { this.init.apply(this, arguments); }}
	cls.prototype = new proto(function(context, method, args) {
		var target = parent;
		while(target = target.prototype) {
			if(target[method]) {
				return target[method].apply(context, args || []);
			}
		}
		throw new Error('supr: parent method ' + method + ' does not exist');
	});
	cls.prototype.constructor = cls;
	return cls;
}

exports.Singleton = function(parent, proto) {
	return new (exports.Class(parent, proto))();
}