module('from lib.javascript import Class');

exports.Publisher = Class(function() {
	
	this.init = function() {
		this._subscribers = {};
	}
	
	this.subscribe = function(signal, callback) {
		if (!this._subscribers[signal]) { this._subscribers[signal] = []; }
		this._subscribers[signal].push(callback);
	}

	this.publish = function(signal) {
		var args = Array.prototype.slice.call(arguments, 1);
		for (var i=0, callback; callback = this._subscribers[signal][i]; i++) {
			callback.apply(this, args);
		}
	}
	
})