enyo.kind({
	name: "SettingsModel",
	kind: "enyo.Collection",
	url: "http://www.adelberg-online.de/weatherstation/ws/app/locations",
  parse: function(data) {
		var wsLocationModels = [];
		var locationId = this.get("locationId");
		for( var key in data){
			var selected = "false";
			var location = data[key];
			if(locationId == location.ID) {
				selected = "true";
			}
			location.SELECTED = selected;
			wsLocationModels.push(location);
		}
		return wsLocationModels;
  },
  source: "settingsModelSource"
});
