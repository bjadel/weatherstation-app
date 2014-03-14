enyo.kind({
	name: "LatestModel",
	kind: "enyo.Model",
	getUrl: function() {
            	return "http://www.adelberg-online.de/weatherstation/ws/app/latest";
    		},
    parse: function(data) {
    	// format date
    	var timestamp = data.date;
    	if(timestamp.indexOf('Z')==-1)timestamp=timestamp.replace(' ','T')+'Z';
		var date = new Date(timestamp);
		var prefixMinute = "";
		if (date.getMinutes() < 10) {
			prefixMinute = date.getMinutes();
		}
		data.date = date.getDate() + '.' + (date.getMonth()+1) + "." + date.getFullYear() + " " + date.getHours() + ":" + prefixMinute + date.getMinutes() + " Uhr";
    	return data;
    }
});