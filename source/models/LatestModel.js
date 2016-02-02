enyo.kind({
	name: "LatestModel",
	kind: "enyo.Collection",
	getUrl: function() {
		var url = "http://www.adelberg-online.de/weatherstation/ws/app/location/"+this.locationId+"/latest";
    return url;
  },
  parse: function(data) {
  	return data.result;
  },
  source: 'latestModelSource'
});
