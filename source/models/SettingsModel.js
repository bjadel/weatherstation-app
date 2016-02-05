enyo.kind({
	name: "SettingsModel",
	kind: "enyo.Collection",
	getUrl: function() {
    		//return "http://www.adelberg-online.de/weatherstation/ws/app/locations";
		return "http://localhost:8080/weatherstation/ws/app/locations";
  	},
  parse: function(data) {
  	return data.result;
  },
  source: 'settingsModelSource'
});
