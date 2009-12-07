jsio.setPath('js');

(function(){
	jsio('import ui.TabContainer');
	jsio('import marcuswestin.Layout');
	jsio('import lib.navigationManager');
	jsio('import marcuswestin.views.factory');
	
	var layout = new marcuswestin.Layout();
	var tabContainer = new ui.TabContainer();

	document.body.appendChild(layout.getElement());
	layout.getHeader().appendChild(tabContainer.getElement());

	tabContainer.addTab('All');
	tabContainer.addTab('Blog');
	tabContainer.addTab('Github');
	tabContainer.addTab('Twitter');
	tabContainer.addTab('Youtube');
	tabContainer.addTab('Projects');
	tabContainer.addTab('Bio & Resume');

	lib.navigationManager.subscribe('Navigate', function(destination, items){
		var content = layout.getContent();
		content.innerHTML = '';
		
		for (var i=0, item; item = items[i]; i++) {
			var view = marcuswestin.views.factory.getView(item);
			content.appendChild(view.getElement());
		}
		layout.onResize();
	});
})();



