enyo.kind({
	name: "MainView",
	kind: "FittableRows",
	fit: true,
	events: {
	  onToggleMenu: ""
	},
	components: [{
	  name: "MainMenuPane", kind: "MainMenuPane"
	}]
});
