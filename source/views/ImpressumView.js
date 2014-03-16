enyo.kind({
	name: "ImpressumView",
	noStretch: true,
	published: {
		appModel: null
	},
	components: [{
		layoutKind: "FittableRowsLayout", noStretch: true, components: [
			{content: "App Name:", classes: "name", tag: "span"},
			{name: "appName", classes: "name last", tag: "span"},
			{content: "App Version:", classes: "name", tag: "span"},
			{name: "version", classes: "name last", tag: "span"},
			{content: "Autor:", classes: "name", tag: "span"},
			{name: "author", classes: "name last", tag: "span"},
			{content: "E-Mail:", classes: "name", tag: "span"},
			{name: "email", classes: "name last", tag: "span"},
			{content: "Homepage:", classes: "name", tag: "span"},
			{name: "homepage", classes: "name last", tag: "span"}
		]}
	],
	bindings: [
		{from: ".appModel.appName", to: ".$.appName.content"},
		{from: ".appModel.author", to: ".$.author.content"},
		{from: ".appModel.supportMail", to: ".$.email.content"},
		{from: ".appModel.supportHomepage", to: ".$.homepage.content"},
		{from: ".appModel.version", to: ".$.version.content"}
	]
});