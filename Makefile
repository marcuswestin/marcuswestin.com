.PHONY: alderaan clean-alderaan module clean-module xhr clean-xhr

all: module xhr
clean: clean-module clean-alderaan clean-xhr
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

module:
	curl http://github.com/marcuswestin/module-js/raw/4c7108eabb0d46fe4ed2b2cb8b05a1a58ad847d5/module.js > js/module.js
clean-module:
	rm -f js/module.js

xhr: xhr-dev
	rm XMLHttpRequest.src.js
xhr-dev:
	curl http://xmlhttprequest.googlecode.com/files/XMLHttpRequest.1.0.3.zip > XMLHttpRequest.zip
	unzip XMLHttpRequest.zip
	rm COPYING.LESSER
	rm XMLHttpRequest.zip
	mv XMLHttpRequest.js js
clean-xhr:
	rm -f js/XMLHttpRequest.src.js
	rm -f js/XMLHttpRequest.js

