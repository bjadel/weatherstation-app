enyo.kind({
	name: "LatestModel",
	kind: "enyo.Collection",
	getUrl: function() {
		return "http://www.adelberg-online.de/weatherstation/ws/app/location/"+this.get('locationId')+"/latest";
  },
  source: "latestModelSource"
});
