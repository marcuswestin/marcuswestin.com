.PHONY: alderaan jsio twitter

all: jsio twitter
clean: clean-jsio clean-twitter clean-alderaan
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

jsio:
	curl http://github.com/mcarter/js.io/raw/d44eb1f2972cd64c7382ca327ee87a1366e4df6b/packages/PKG.js | sed s_PKG_jsio_g > js/jsio.js
clean-jsio:
	rm -f js/jsio.js

twitter:
	mkdir js/lib/twitter
	curl http://github.com/marcuswestin/twitter.js/raw/9437bb7eda5f0fff8a117a12b171813f8a092673/twitter/twitter.js > js/lib/twitter/twitter.js
	curl http://github.com/marcuswestin/twitter.js/raw/9437bb7eda5f0fff8a117a12b171813f8a092673/twitter/node.js > js/lib/twitter/node.js
clean-twitter:
	rm -rf js/lib/twitter