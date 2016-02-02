enyo.kind({
	name: "Application",
	kind: "enyo.Application",
	view: "MainView",
	initComponents: function() {
		this.inherited(arguments);
		enyo.AjaxSource.create({name:'latestModelSource'});
		enyo.AjaxSource.create({name:'todayModelSource'});
		enyo.AjaxSource.create({name:'settingsModelSource'}); 
	}
});
