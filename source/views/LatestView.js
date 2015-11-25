enyo.kind({
	name: "LatestView",
	noStretch: true,
	published: {
		latestModel: null
	},
	components: [
		{layoutKind: "FittableRowsLayout", noStretch: true, components: [
			{name: "sensors", layoutKind: "FittableColumnsLayout", classes: "latest", noStretch: true, components: [
				{layoutKind: "FittableRowsLayout", classes: "latest_sensor_element", noStretch: true, components: [
					{tag: "span", components: [
						{classes: "symbol", tag: "span"},
						{name: "t1", classes: "name", tag: "span"},
						{content: "°C", classes: "name", tag: "span"}
					]}
				]},
				{layoutKind: "FittableRowsLayout", classes: "latest_sensor_element", noStretch: true, components: [
					{tag: "span", components: [
						{classes: "symbol", tag: "span"},
						{name: "t2", classes: "name", tag: "span"},
						{content: "°C", classes: "name", tag: "span"}
					]}
				]}
			]}
		]}
	],
	bindings: [
		{from: ".latestModel.valueT1", to: ".$.t1.content"},
		{from: ".latestModel.valueT2", to: ".$.t2.content"}
	]
});