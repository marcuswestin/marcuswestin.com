
exports.bind = function(context, method/*, args... */) {
	var args = Array.prototype.slice.call(arguments, 2);
	return function(){
		method = (typeof method == 'string' ? context[method] : method);
		return method.apply(context, args.concat(Array.prototype.slice.call(arguments, 0)))
	}
}

exports.Class = function(parent, proto) {
	if(!parent) { throw new Error('parent or prototype not provided'); }
	if(!proto) { proto = parent; }
	else if(parent instanceof Array) { // multiple inheritance, use at your own risk =)
		proto.prototype = {};
		for(var i = 0, p; p = parent[i]; ++i) {
			for(var item in p.prototype) {
				if(!(item in proto.prototype)) {
					proto.prototype[item] = p.prototype[item];
				}
			}
		}
		parent = parent[0]; 
	} else { 
		proto.prototype = parent.prototype;
	}

	var cls = function() { if(this.init) { this.init.apply(this, arguments); }}
	cls.prototype = new proto(function(context, method, args) {
		var args = args || [];
		var target = parent;
		while(target = target.prototype) {
			if(target[method]) {
				return target[method].apply(context, args);
			}
		}
		throw new Error('method ' + method + ' does not exist');
	});
	cls.prototype.constructor = cls;
	return cls;
}

