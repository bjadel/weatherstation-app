enyo.kind({
	name: "SettingsView",
	noStretch: true,
	events: {
		onStateChanged:""
	},
	published: {
		settingsModel: null,
		locationModel: null,
		latestModel: null
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
					{from: "model.ID", to: "$.checkbox.key"},
					{from: "model.SELECTED", to: "$.checkbox.checked"}
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
			this.latestModel.set("locationId", locationId);
			this.settingsModel.set("locationId", locationId);
			this.latestModel.empty();
			this.latestModel.fetch();
			this.doStateChanged();
    }
		return true;
	}
});
