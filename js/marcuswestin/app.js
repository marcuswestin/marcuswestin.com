module.path.unshift('js');

(function(){
	module('import class ui.TabContainer');
	module('import class marcuswestin.Layout');
	module('import class lib.navigationManager');
	module('import class marcuswestin.views.factory');
	
	console.log(lib.navigationManager);
	var body = document.body;
	
	var tabContainer = new ui.TabContainer();
	
	var layout = new marcuswestin.Layout();
	body.appendChild(layout.getElement());
	
	layout.getHeader().appendChild(tabContainer.getElement());

	tabContainer.addTab('Latest');
	tabContainer.addTab('Projects');
	tabContainer.addTab('Bio');
	tabContainer.addTab('Resume');
	
	lib.navigationManager.subscribe('Navigate', function(destination, items){
		var content = layout.getContent();
		content.innerHTML = '';
		
		for (var i=0, item; item = items[i]; i++) {
			var view = marcuswestin.views.factory.getView(item);
			content.appendChild(view.getElement());
		}
	});
})();



