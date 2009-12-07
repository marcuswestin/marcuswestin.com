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
	mkdir js/lib/twitter
	curl http://github.com/marcuswestin/twitter.js/raw/9437bb7eda5f0fff8a117a12b171813f8a092673/twitter/twitter.js > js/lib/twitter/twitter.js
	curl http://github.com/marcuswestin/twitter.js/raw/9437bb7eda5f0fff8a117a12b171813f8a092673/twitter/node.js > js/lib/twitter/node.js
clean-twitter:
	rm -rf js/lib/twitter