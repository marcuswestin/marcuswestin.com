var events = exports.events = {}

;(function() {
	events.add = function(element, eventName, handler, dontIncludeEvent) {
		// Is removeEvent going to work properly when we wrap the handler in another function?
		function normalizeEvent(e) {
			e = e || event;
			if (!e.target) { e.target = e.srcElement; }
			handler(dontIncludeEvent ? null : e);
		}
		
		if (element.addEventListener) {
			element.addEventListener(eventName, normalizeEvent, false);
			return true;
		} else if (element.attachEvent){
			return element.attachEvent("on"+eventName, normalizeEvent);
		}
	}

	events.remove = function(element, eventName, handler) {
		if (element.removeEventListener) {
			element.removeEventListener(eventName, handler);
			return true;
		} else if (element.detachEvent) {
			return element.detachEvent("on"+eventName, handler);
		}
	} 
})()

