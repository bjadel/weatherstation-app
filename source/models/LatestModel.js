enyo.kind({
	name: "LatestModel",
	kind: "enyo.Collection",
	getUrl: function() {
    return "http://www.adelberg-online.de/weatherstation/ws/app/location/1/latest";
  },
  parse: function(data) {
  	return data.result;
  },
  source: 'latestModelSource'
});
