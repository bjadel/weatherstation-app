enyo.kind({
	name: "LatestView",
	noStretch: true,
	published: {
		latestModel: null
	},
	components: [
		{kind: "enyo.Scroller", fit: true, components: [
			{kind: "enyo.DataRepeater", name: "repeater", components: [
				{components: [
						{name: "sensors", layoutKind: "FittableColumnsLayout", classes: "latest", noStretch: true, components: [
							{layoutKind: "FittableRowsLayout", classes: "latest_sensor_element", noStretch: true, components: [
								{tag: "span", components: [
										{kind: "enyo.Control", name: "date", classes: "name", tag: "span"},
										{classes: "symbol", tag: "span"},
										{kind: "enyo.Control", name: "value", classes: "name", tag: "span"},
										{kind: "enyo.Control", name: "unit", classes: "name", tag: "span"}
									]}
								]}
							]}
				], bindings: [
					{from: ".model.VALUE", to: ".$.value.content"},
					{from: ".model.CREATIONDATE", to: ".$.date.content", transform: function (v) { var curLocale = new ilib.Locale(); var localeInfo = new ilib.LocaleInfo(curLocale); var fmt = new ilib.DateFmt({type: "datetime", locale: curLocale, timezone: "Europe/Berlin"}); var d = fmt.format(v); return v; }},
					{from: ".model.UNIT", to: ".$.unit.content"}
				]}
			]}
		]}
	],
	bindings: [
		{from: ".latestModel", to: ".$.repeater.collection"}
	]
});
