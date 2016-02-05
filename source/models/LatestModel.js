enyo.kind({
	name: "LatestModel",
	kind: "enyo.Collection",
	getUrl: function() {
		//var url = "http://www.adelberg-online.de/weatherstation/ws/app/location/"+this.get('locationId'(+"/latest";
		var url = "http://localhost:8080/weatherstation/ws/app/location/"+this.get('locationId')+"/latest";

    return url;
  },
  parse: function(data) {
  	return data.result;
  },
  source: 'latestModelSource'
});
