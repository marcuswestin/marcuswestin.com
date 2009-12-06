module.path.unshift('js');

(function(){
	module('import class ui.TabContainer');
	module('import class marcuswestin.Layout');
	module('import class lib.navigationManager');
	module('import class marcuswestin.views.factory');
	
	var layout = new marcuswestin.Layout();
	var tabContainer = new ui.TabContainer();

	document.body.appendChild(layout.getElement());
	layout.getHeader().appendChild(tabContainer.getElement());

	tabContainer.addTab('Latest');
	tabContainer.addTab('Blog');
	tabContainer.addTab('Twitter');
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



