/**
 * Selected location
 */
enyo.kind({
	name: "LocationModel",
	kind: "enyo.Model",
	locationIdChanged: function(locationIdOld) {
		localStorage.setItem("locationId", this.get("locationId"));
	}
});
