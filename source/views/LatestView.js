enyo.kind({
	name: "LatestView",
	noStretch: true,
	published: {
		latestModel: null
	},
	components: [
		{layoutKind: "FittableRowsLayout", noStretch: true, components: [
			{name: "sensors", layoutKind: "FittableColumnsLayout", noStretch: true, components: [
				{layoutKind: "FittableRowsLayout", classes: "latest_sensor_element", noStretch: true, components: [
					{content: "Temperatur Sensor 1", classes: "name", tag: "h4"},
					{id: "temperatureSensor1", classes: "tachometer", tag: "div"},
					{tag: "span", components: [
						{name: "t1", classes: "name", tag: "span"},
						{content: "°C", classes: "name", tag: "span"}
					]}
				]},
				{layoutKind: "FittableRowsLayout", classes: "latest_sensor_element", noStretch: true, components: [
					{content: "Temperatur Sensor 2", classes: "name", tag: "h4"},
					{id: "temperatureSensor2", classes: "tachometer", tag: "div"},
					{tag: "span", components: [
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
	],
	loadTachometer: function(record) {
		// temperature 1 sensor
		var temperature1 = parseFloat(record.attributes.valueT1);
    	Raphael('temperatureSensor1').tachometer(temperature1, {number: true, numberMin: -35, numberMax: 35, numberUnit: "°C", scaleAngleEnd: 320, longScaleCount: 14, shortScaleCount: 70});
    	// temperature 1 sensor
		var temperature2 = parseFloat(record.attributes.valueT2);
    	Raphael('temperatureSensor2').tachometer(temperature2, {number: true, numberMin: -35, numberMax: 35, numberUnit: "°C", scaleAngleEnd: 320, longScaleCount: 14, shortScaleCount: 70});
	}
});