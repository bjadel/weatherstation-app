enyo.kind({
	name: "TodayView",
	noStretch: true,
	components: [
		{layoutKind: "FittableRowsLayout", noStretch: true, components: [
			{name: "sensors", layoutKind: "FittableColumnsLayout", noStretch: true, components: [
				{layoutKind: "FittableRowsLayout", classes: "today_sensor_element", noStretch: true, components: [
					{content: "Temperatur", classes: "name", tag: "h4"},
					{id: "temperatureChart", classes: "temperature", tag: "canvas"}
				]}
			]}
		]}
	],
	loadChart: function(record) {
		// temperature 1 sensor
		$temperature1Data = record.attributes.t1;
		$temperature1 = Object.keys($temperature1Data).map(function (key) {
    		return parseFloat($temperature1Data[key]);
		});
    	// temperature 2 sensor
    	$temperature2Data = record.attributes.t2;
		$temperature2 = Object.keys($temperature2Data).map(function (key) {
			return parseFloat($temperature2Data[key]);
		});
		// data
		var data = {
			labels : Object.keys(record.attributes.t1).map(function (key) {
					if( key.substr(-2) === "00" ) {
						return key;
					} else {
						return "";
					}
			}),
			datasets : [
				{
					fillColor : "rgba(220,220,220,0.5)",
					strokeColor : "rgba(220,220,220,1)",
					pointColor : "rgba(220,220,220,1)",
					pointStrokeColor : "#fff",
					data : $temperature1
				},
				{
					fillColor : "rgba(151,187,205,0.5)",
					strokeColor : "rgba(151,187,205,1)",
					pointColor : "rgba(151,187,205,1)",
					pointStrokeColor : "#fff",
					data : $temperature2
				}
			]
		}
		// options
		var options = {

			skipLabels : true,
				
			//Boolean - If we show the scale above the chart data			
			scaleOverlay : false,
			
			//Boolean - If we want to override with a hard coded scale
			scaleOverride : false,
			
			//** Required if scaleOverride is true **
			//Number - The number of steps in a hard coded scale
			scaleSteps : null,
			//Number - The value jump in the hard coded scale
			scaleStepWidth : null,
			//Number - The scale starting value
			scaleStartValue : null,

			//String - Colour of the scale line	
			scaleLineColor : "rgba(0,0,0,.1)",
			
			//Number - Pixel width of the scale line	
			scaleLineWidth : 1,

			//Boolean - Whether to show labels on the scale	
			scaleShowLabels : true,
			
			//Interpolated JS string - can access value
			scaleLabel : "<%=value%>",
			
			//String - Scale label font declaration for the scale label
			scaleFontFamily : "'Arial'",
			
			//Number - Scale label font size in pixels	
			scaleFontSize : 12,
			
			//String - Scale label font weight style	
			scaleFontStyle : "normal",
			
			//String - Scale label font colour	
			scaleFontColor : "#666",	
			
			///Boolean - Whether grid lines are shown across the chart
			scaleShowGridLines : true,
			
			//String - Colour of the grid lines
			scaleGridLineColor : "rgba(0,0,0,.05)",
			
			//Number - Width of the grid lines
			scaleGridLineWidth : 1,	
			
			//Boolean - Whether the line is curved between points
			bezierCurve : true,
			
			//Boolean - Whether to show a dot for each point
			pointDot : false,
			
			//Number - Radius of each point dot in pixels
			pointDotRadius : 3,
			
			//Number - Pixel width of point dot stroke
			pointDotStrokeWidth : 1,
			
			//Boolean - Whether to show a stroke for datasets
			datasetStroke : true,
			
			//Number - Pixel width of dataset stroke
			datasetStrokeWidth : 2,
			
			//Boolean - Whether to fill the dataset with a colour
			datasetFill : true,
			
			//Boolean - Whether to animate the chart
			animation : true,

			//Number - Number of animation steps
			animationSteps : 60,
			
			//String - Animation easing effect
			animationEasing : "easeOutQuart",

			//Function - Fires when the animation is complete
			onAnimationComplete : null
			
		}
		// chart
		var ctx = document.getElementById("temperatureChart").getContext("2d");
		appModel = new AppModel();
    	if (appModel.get("existsBigScreen")) {
    		ctx.canvas.width = 640;
			ctx.canvas.height = 480;
    	} else {
    		ctx.canvas.width = 320;
			ctx.canvas.height = 240;
    	}
		var temperatureChart = new Chart(ctx).Line(data,options);
	}
});