enyo.kind({
	name: "TodayModel",
	kind: "enyo.Model",
	getUrl: function() {
            	return "http://www.adelberg-online.de/weatherstation/ws/app/today";
    		},
    parse: function(data) {
    	// format date
    	// temperature 1 sensor
		var temperature1Data = data.t1;
		var formattedTemperature1Data = {};
		var temperature1DataKeys = Object.keys(temperature1Data);
		for (var i = 0; i < temperature1DataKeys.length; i++) {
  			formattedTemperature1Data[this.formatDate(temperature1DataKeys[i])] = temperature1Data[temperature1DataKeys[i]];
		}
		data.t1 = formattedTemperature1Data;
		// temperature 2 sensor
		var temperature2Data = data.t2;
		var formattedTemperature2Data = {};
		var temperature2DataKeys = Object.keys(temperature2Data);
		for (var i = 0; i < temperature2DataKeys.length; i++) {
  			formattedTemperature2Data[this.formatDate(temperature2DataKeys[i])] = temperature2Data[temperature2DataKeys[i]];
		}
		data.t2 = formattedTemperature2Data;
    	
		return data;
    },
    formatDate: function(timestamp) {
    	if(timestamp.indexOf('Z')==-1)timestamp=timestamp.replace(' ','T')+'Z';
		var date = new Date(timestamp);
		var prefixMinute = "";
		if (date.getMinutes() < 10) {
			prefixMinute = date.getMinutes();
		}
    	return date.getHours() + ":" + prefixMinute + date.getMinutes();
    }
});