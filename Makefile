.PHONY: alderaan module QEvent

all: module QEvent
clean: clean-module clean-alderaan clean-xhr clean-QEvent
	rm -f *~

alderaan:
	git clone --depth 1 git://github.com/marcuswestin/alderaan.git alderaan
	chmod -R 777 .
	sed s_'\.\./\.\./\.\.'_'\.\./\.\./\.\./\.\.'_ alderaan/cmd/php/util.php.inc > util.php.inc.tmp
	mv util.php.inc.tmp alderaan/cmd/php/util.php.inc
clean-alderaan:
	rm -rf alderaan
	rm -f command.history
	rm -f plugins.json

module: js/module.js
	curl http://github.com/marcuswestin/module-js/raw/4c7108eabb0d46fe4ed2b2cb8b05a1a58ad847d5/module.js > js/module.js
clean-module:
	rm -f js/module.js

QEvent: js/lib/QEvent.js
	curl http://qevent.googlecode.com/svn/trunk/Source/QEvent.js > js/lib/events.js
	echo "\nwindow.events = QEvent" >> js/lib/events.js
clean-QEvent:
	rm -f js/lib/QEvent.js

