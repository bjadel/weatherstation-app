enyo.kind({
	name: "LatestModel",
	kind: "enyo.Collection",
	getUrl: function() {
		var url = "http://www.adelberg-online.de/weatherstation/ws/app/location/"+this.locationModel.attributes.locationId+"/latest";
    return url;
  },
  parse: function(data) {
  	return data.result;
  },
  source: 'latestModelSource',
	constructor: function(_locationModel) {
    this.locationModel = _locationModel;
    // Call the constructor inherited from Object
    this.inherited(arguments);
  }
});
