/**
 * Selected location
 */
enyo.kind({
	name: "LocationModel",
	kind: "enyo.Model",
	locationIdChanged: function(locationIdOld) {
		var newLocationId = this.get("locationId");
		localStorage.setItem("locationId", newLocationId);
	}
});
