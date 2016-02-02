enyo.kind({
	name: "SettingsView",
	noStretch: true,
	published: {
		settingsModel: null,
		locationModel: null
	},
	components: [
    {classes: "onyx-sample-divider", content: "Wetterstationen"},
    {kind: "enyo.Group", onActivate: "handleActiveChanged", components: [
	    {kind: "enyo.DataRepeater", name: "repeater", components: [
	      {components: [
					{ kind:"onyx.Checkbox", name: "checkbox", key: "0"},
					{ name: "name", content: "Wetterstation", tag: "span"}
				], bindings: [
	        {from: "model.NAME", to: "$.name.content"},
					{from: "model.ID", to: "$.checkbox.key"}
	      ]}
	    ]}
  	]}
  ],
	bindings: [
		{from: "settingsModel", to: "$.repeater.collection"}
	],
  handleActiveChanged: function(inSender, inEvent) {
    if (inEvent.originator.getActive()) {
			var locationId = inEvent.originator.key;
			this.locationModel.set("locationId", locationId);
    }
		return true;
	}
});
