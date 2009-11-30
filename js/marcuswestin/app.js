module.path.unshift('js');

(function(){
	module('import class marcuswestin.Header');
	module('import class marcuswestin.TabContainer');
	
	var body = document.body;
	
	var header = new marcuswestin.Header();
	var tabContainer = new marcuswestin.TabContainer();
	
	tabContainer.addTab('Latest');
	
	//body.appendChild(header.getElement());
})();

