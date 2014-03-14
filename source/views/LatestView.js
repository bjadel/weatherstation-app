enyo.kind({
	name: "LatestView",
	kind: "FittableRows",
	noStretch: true,
	published: {
		latestModel: null
	},
	components: [{
		layoutKind: "FittableRowsLayout", noStretch: true, components: [
			{id: "canvas", tag: "div"},
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
	],
	loadTachometer: function(record) {
		var temperature1 = parseFloat(record.attributes.valueT1);
    	Raphael('canvas').tachometer(temperature1, {number: true, numberMin: -40, numberMax: 40, numberUnit: "°C"});
	}
});