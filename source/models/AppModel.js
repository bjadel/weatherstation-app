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
		version: "0.0.1",
		author: "Björn Adelberg",
		supportMail: "mailto:bjawebos@adelberg-online.de",
		supportHomepage: "http://dev.adelberg-online.de",
		supportTwitter: "https://twitter.com/bjawebos",
		existsSmallScreen: enyo.dom.getWindowWidth() <= 348,
		existsBigScreen: enyo.dom.getWindowWidth() > 760
	}
});