enyo.kind({
	name: "SettingsModel",
	kind: "enyo.Collection",
	url: "http://www.adelberg-online.de/weatherstation/ws/app/locations",
	selectedLocation: "",
	locations: [],
  parse: function(data) {
		this.locations = [];
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
			this.locations[location.ID] = location;
		}
		return wsLocationModels;
  },
  source: "settingsModelSource",
	getSelectedLocation: function() {
		return this.locations[this.get("locationId")];
	}
});
