enyo.kind({
	name: "LatestModel",
	kind: "enyo.Model",
	getUrl: function() {
            	return "http://www.adelberg-online.de/weatherstation/ws/app/latest";
    		},
    parse: function(data) {
    	// format date
    	var timestamp = data.date;
		var dateUTC = new Date(timestamp);
		var dateClient = new Date(Date.UTC(dateUTC.getFullYear(), dateUTC.getMonth(), dateUTC.getDate(), dateUTC.getHours(), dateUTC.getMinutes(), dateUTC.getSeconds()));		
		
		var cal = ilib.Cal.newInstance({
            locale: ilib.getLocale(),
            type: 'gregorian'
        });
        var date = cal.newDateInstance({
            year: dateClient.getFullYear(),
            month: dateClient.getMonth() + 1,
            day: dateClient.getDate(),
            hour: dateClient.getHours(),
            minute: dateClient.getMinutes(),
            second: dateClient.getSeconds(),
            millisecond: 0
        });

		var options = {};
        options['calendar'] = 'gregorian';
        options['length'] = 'full';
        options['type'] = 'datetime';
		var fmt = new ilib.DateFmt(options);
		data.date = fmt.format(date);
    	return data;
    }
});