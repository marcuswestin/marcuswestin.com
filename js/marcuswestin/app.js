module.path.unshift('js');

(function(){
	module('import class marcuswestin.TabContainer');
	
	var body = document.body;
	
	var tabContainer = new marcuswestin.TabContainer();
	
	tabContainer.addTab('Latest');
	tabContainer.addTab('Projects');
	
	var marginTop = body.appendChild(document.createElement('div'));
	var marginLeft = body.appendChild(document.createElement('div'));
	var logo = body.appendChild(document.createElement('div'));
	var content = marginLeft.appendChild(document.createElement('div'));
	var header = content.appendChild(document.createElement('div'));
	var slogan = header.appendChild(document.createElement('div'));
	
	marginTop.id = 'marginTop';
	marginLeft.id = 'marginLeft';
	logo.id = 'logo';
	content.id = 'content';
	header.id = 'header';
	slogan.id = 'slogan';
	
	slogan.appendChild(document.createTextNode('marcus westin'));
	
	header.appendChild(tabContainer.getElement());
})();

