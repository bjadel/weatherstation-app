enyo.kind({
	name: "ImpressumView",
	noStretch: true,
	published: {
		appModel: null
	},
	components: [{kind: "enyo.Scroller", fit: true, components: [
			{name: "sensors", layoutKind: "FittableColumnsLayout", classes: "impressum", noStretch: true, components: [
				{layoutKind: "FittableRowsLayout", classes: "impressum-entry", noStretch: true, components: [
					{tag: "span", components: [
						{name: "appName", classes: "impressum-text", tag: "div"},
						{content: "App Name", classes: "impressum-title", tag: "div"}
					]}
				]},
				{layoutKind: "FittableRowsLayout", classes: "impressum-entry", noStretch: true, components: [
					{tag: "span", components: [
						{name: "version", classes: "impressum-text", tag: "div"},
						{content: "Version", classes: "impressum-title", tag: "div"}
					]}
				]},
				{layoutKind: "FittableRowsLayout", classes: "impressum-entry", noStretch: true, components: [
					{tag: "span", components: [
						{name: "author", classes: "impressum-text", tag: "div"},
						{content: "Author", classes: "impressum-title", tag: "div"}
					]}
				]},
				{layoutKind: "FittableRowsLayout", classes: "impressum-entry", noStretch: true, components: [
					{tag: "span", components: [
						{name: "email", content: "", classes: "impressum-text"},
						{content: "E-Mail", classes: "impressum-title", tag: "div"}
					]}
				]},
				{layoutKind: "FittableRowsLayout", classes: "impressum-entry", noStretch: true, components: [
					{tag: "span", components: [
						{name: "homepage", content: "", classes: "impressum-text", tag: "a", allowHtml: true},
						{content: "Homepage", classes: "impressum-title", tag: "div"}
					]}
				]}
			]}
		]}
	],
	bindings: [
		{from: ".appModel.appName", to: ".$.appName.content"},
		{from: ".appModel.author", to: ".$.author.content"},
		{from: ".appModel.supportMail", to: ".$.email.content"},
		{from: ".appModel.supportMail", to: ".$.email.attributes.href"},
		{from: ".appModel.supportHomepage", to: ".$.homepage.content"},
		{from: ".appModel.supportHomepage", to: ".$.homepage.attributes.href"},
		{from: ".appModel.version", to: ".$.version.content"}
	]
});
