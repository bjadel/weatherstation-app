/**
 * App metadata
 */
enyo.kind({
	name: "AppModel",
	kind: "enyo.Model",
	attributes: {
		// moving this property to the attributes schema definition will
		// allow the onChange event to be fired when that property changes
		appName: "Wetter",
		version: "0.0.3",
		author: "Björn Adelberg",
		supportMail: "bjawebos@adelberg-online.de",
		supportHomepage: "https://github.com/bjadel/weatherstation-app",
		supportTwitter: "https://twitter.com/bjawebos"
	},
	computeExistsSmallScreen: function() {
		return enyo.dom.getWindowWidth() <= 348;
	},
	computeExistsBigScreen: function() {
		return enyo.dom.getWindowWidth() > 760;
	}
});
