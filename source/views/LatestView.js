enyo.kind({
	name: "LatestView",
	kind: "FittableRows",
	noStretch: true,
	published: {
		latestModel: null
	},
	components: [{
		layoutKind: "FittableRowsLayout", noStretch: true, components: [
			{content: "Datum:", classes: "name", tag: "span"},
			{name: "date", classes: "name last", tag: "span"},
			{content: "Temperatur 1:", classes: "name", tag: "span"},
			{name: "t1", classes: "name last-letter", tag: "span"},
			{content: "Temperatur 2:", classes: "name", tag: "span"},
			{name: "t2", classes: "name last-letter", tag: "span"}
		]}
	],
	bindings: [
		{from: ".latestModel.date", to: ".$.date.content"},
		{from: ".latestModel.valueT1", to: ".$.t1.content"},
		{from: ".latestModel.valueT2", to: ".$.t2.content"}
	]
});