.PHONY: clean module alderaan

all: module

alderaan:
	rm -rf alderaan
	git clone --depth 1 git://github.com/marcuswestin/alderaan.git alderaan
	chmod -R 777 .
	sed s_'\.\./\.\./\.\.'_'\.\./\.\./\.\./\.\.'_ alderaan/cmd/php/util.php.inc > util.php.inc.tmp
	mv util.php.inc.tmp alderaan/cmd/php/util.php.inc

module:
	curl http://github.com/marcuswestin/module-js/raw/4c7108eabb0d46fe4ed2b2cb8b05a1a58ad847d5/module.js > js/module.js

clean:
	rm -rf alderaan
	rm -f js/module.js

