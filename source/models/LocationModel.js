/**
 * Selected location
 */
enyo.kind({
	name: "LocationModel",
	kind: "enyo.Model",
	attributes: {
		// moving this property to the attributes schema definition will
		// allow the onChange event to be fired when that property changes
		locationId: "1"
	}
});
