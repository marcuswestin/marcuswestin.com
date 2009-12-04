module.path.unshift('js');

(function(){
	module('import class marcuswestin.TabContainer');
	module('import class marcuswestin.Layout');
	module('import class lib.HistoryManager');
	module('from lib.javascript import bind');

	module('import class marcuswestin.views.BioView as views.BioView');
	
	var body = document.body;
	
	var tabContainer = new marcuswestin.TabContainer();
	
	var layout = new marcuswestin.Layout();
	body.appendChild(layout.getElement());
	
	layout.getHeader().appendChild(tabContainer.getElement());

	var historyManager = new lib.HistoryManager();
	
	tabContainer.addTab('Latest');
	tabContainer.addTab('Projects');
	tabContainer.addTab('Bio');
	tabContainer.addTab('Resume');
	
	var bioView = new views.BioView();
	
	historyManager.subscribe('Navigate', function(destination, htmlContent){
		var content = layout.getContent();
		content.innerHTML = '';
		
		switch(destination) {
			case 'Bio':
				bioView.render(htmlContent);
				content.appendChild(bioView.getElement());
				break;
			default:
				content.innerHTML = destination + htmlContent
				break;
		}
	});
})();

