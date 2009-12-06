.PHONY: alderaan module twitter

all: module twitter
clean: clean-module clean-twitter clean-alderaan
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
	curl http://github.com/marcuswestin/module.js/raw/4c7108eabb0d46fe4ed2b2cb8b05a1a58ad847d5/module.js > js/module.js
clean-module:
	rm -f js/module.js

twitter:
	curl http://github.com/marcuswestin/twitter.js/raw/163022a90bd9b7ae1ec20e840da6e54e82e023a8/twitter.js > js/lib/twitter.js
clean-twitter:
	rm -f js/lib/twitter.js