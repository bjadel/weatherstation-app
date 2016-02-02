enyo.kind({
	name: "LatestView",
	noStretch: true,
	published: {
		latestModel: null,
		locationModel: null
	},
	observers: {
		watchValues: ["locationModel"]
	},
	watchValues: function(previous, current, property) {  // Called when either property changes
    this.latestModel.fetch();
  },
	components: [
		{kind: "enyo.DataRepeater", name: "repeater", components: [
			{components: [
					{layoutKind: "FittableColumnsLayout", classes: "latest", noStretch: true, components: [
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
				{from: "model.VALUE", to: "$.value.content"},
				{from: "model.CREATIONDATE", to: "$.date.content", transform:
					function (v) {
						try {
							var dateTimeArray = v.trim().split(" ");
							var dateArray = dateTimeArray[0].split("-");
							var timeArray = dateTimeArray[1].split(":");
							var year = dateArray[0];
							var month = parseInt(dateArray[1]) - 1;
							var day = dateArray[2];
							var hour = timeArray[0];
							var minute = timeArray[1];
							var second = timeArray[2];
							var curLocale = new ilib.Locale();
							var localeInfo = new ilib.LocaleInfo(curLocale);
							var fmt = new ilib.DateFmt({type: "datetime", locale: curLocale, timezone: "Europe/Berlin"});
							var d = fmt.format(new Date(Date.UTC(year, month, day, hour, minute, second)));
						} catch(err) {
							console.exception("Parsing error of date.");
							return v;
						}
						return d;
					}
				},
				{from: "model.UNIT", to: "$.unit.content", transform:
					function (v) {
						return $L(v);
					}
				}
			]}
		]}
	],
	bindings: [
		{from: "latestModel", to: "$.repeater.collection"}
	]
});
