// var map;

// // Create a new blank array for all the listing markers.
// var markers = [];

// // This global polygon variable is to ensure only ONE polygon is rendered.
// var polygon = null;

// var locations = [];

// function store_locations(lat, lng) {
// 	// used to show markers

<<<<<<< HEAD
	/*locations = [ new google.maps.LatLng(lat, lng) ];*/
}
=======
// 	locations = [ new google.maps.LatLng(lat, lng) ];
// }
>>>>>>> master

// function initMap() {
// 	// Create a styles array to use with the map.
// 	var styles = [ {
// 		featureType : 'water',
// 		stylers : [ {
// 			color : '#19a0d8'
// 		} ]
// 	}, {
// 		featureType : 'administrative',
// 		elementType : 'labels.text.stroke',
// 		stylers : [ {
// 			color : '#ffffff'
// 		}, {
// 			weight : 6
// 		} ]
// 	}, {
// 		featureType : 'administrative',
// 		elementType : 'labels.text.fill',
// 		stylers : [ {
// 			color : '#e85113'
// 		} ]
// 	}, {
// 		featureType : 'road.highway',
// 		elementType : 'geometry.stroke',
// 		stylers : [ {
// 			color : '#efe9e4'
// 		}, {
// 			lightness : -40
// 		} ]
// 	}, {
// 		featureType : 'transit.station',
// 		stylers : [ {
// 			weight : 9
// 		}, {
// 			hue : '#e85113'
// 		} ]
// 	}, {
// 		featureType : 'road.highway',
// 		elementType : 'labels.icon',
// 		stylers : [ {
// 			visibility : 'off'
// 		} ]
// 	}, {
// 		featureType : 'water',
// 		elementType : 'labels.text.stroke',
// 		stylers : [ {
// 			lightness : 100
// 		} ]
// 	}, {
// 		featureType : 'water',
// 		elementType : 'labels.text.fill',
// 		stylers : [ {
// 			lightness : -100
// 		} ]
// 	}, {
// 		featureType : 'poi',
// 		elementType : 'geometry',
// 		stylers : [ {
// 			visibility : 'on'
// 		}, {
// 			color : '#f0e4d3'
// 		} ]
// 	}, {
// 		featureType : 'road.highway',
// 		elementType : 'geometry.fill',
// 		stylers : [ {
// 			color : '#efe9e4'
// 		}, {
// 			lightness : -25
// 		} ]
// 	} ];

<<<<<<< HEAD
	// Constructor creates a new map - only center and zoom are required.
	map = new google.maps.Map(document.getElementById('map'), {
		center : {
			lat : 40.7413549,
			lng : -82.9988
		},
		zoom : 13,
		styles : styles,
		mapTypeControl : false
	});
/*	$.ajax({
		type : 'GET',
		datatype : 'json',
		url : './js/addresses.json',
		success : function(locationList) {
			var infoLength = locationList.addresses.length;
			console.log("locationList: " + locationList);
			for (var i = 0; i < infoLength; i++) {
				var location = new google.maps.LatLng(
						locationList.addresses[i].lat,
						locationList.addresses[i].lng);
				locations.push(location);
				console.log("location: " + location);
				var position = location;
				var name = locationList.addresses[i].name;
				// Create a marker per location, and put into markers array.
				var marker = new google.maps.Marker({
					position : position,
					name : name,
					animation : google.maps.Animation.DROP,
					icon : defaultIcon,
					id : i
				});
=======
// 	// Constructor creates a new map - only center and zoom are required.
// 	map = new google.maps.Map(document.getElementById('map'), {
// 		center : {
// 			lat : 40.7413549,
// 			lng : -82.9988
// 		},
// 		zoom : 13,
// 		styles : styles,
// 		mapTypeControl : false
// 	});
// 	$.ajax({
// 		type : 'GET',
// 		datatype : 'json',
// 		url : './js/addresses.json',
// 		success : function(locationList) {
// 			var infoLength = locationList.addresses.length;
// 			console.log("locationList: " + locationList);
// 			for (var i = 0; i < infoLength; i++) {
// 				var location = new google.maps.LatLng(
// 						locationList.addresses[i].lat,
// 						locationList.addresses[i].lng);
// 				locations.push(location);
// 				console.log("location: " + location);
// 				var position = location;
// 				var name = locationList.addresses[i].name;
// 				// Create a marker per location, and put into markers array.
// 				var marker = new google.maps.Marker({
// 					position : position,
// 					name : name,
// 					animation : google.maps.Animation.DROP,
// 					icon : defaultIcon,
// 					id : i
// 				});
>>>>>>> master

// 				markers.push(marker);
// 			}
// 			console.log(locations);
// 			console.log(markers);
// 			// console.log(locationList)

<<<<<<< HEAD
		}
	});*/
=======
// 		}
// 	});
>>>>>>> master

// 	// These are the real estate listings that will be shown to the user.
// 	// Normally we'd have these in a database instead.
// 	/*
// 	 * var locations = [ {title: 'Park Ave Penthouse', location: {lat: 39.9612,
// 	 * lng: -73.9632393}}, {title: 'Chelsea Loft', location: {lat: 40.7444883,
// 	 * lng: -73.9949465}}, {title: 'Union Square Open Floor Plan', location:
// 	 * {lat: 40.7347062, lng: -73.9895759}}, {title: 'East Village Hip Studio',
// 	 * location: {lat: 40.7281777, lng: -73.984377}}, {title: 'TriBeCa Artsy
// 	 * Bachelor Pad', location: {lat: 40.7195264, lng: -74.0089934}}, {title:
// 	 * 'Chinatown Homey Space', location: {lat: 40.7180628, lng: -73.9961237}} ];
// 	 */

// 	var largeInfowindow = new google.maps.InfoWindow();

// 	// Initialize the drawing manager.
// 	var drawingManager = new google.maps.drawing.DrawingManager({
// 		drawingMode : google.maps.drawing.OverlayType.POLYGON,
// 		drawingControl : true,
// 		drawingControlOptions : {
// 			position : google.maps.ControlPosition.TOP_LEFT,
// 			drawingModes : [ google.maps.drawing.OverlayType.POLYGON ]
// 		}
// 	});

// 	// Style the markers a bit. This will be our listing marker icon.
// 	var defaultIcon = makeMarkerIcon('0091ff');

// 	// Create a "highlighted location" marker color for when the user
// 	// mouses over the marker.
// 	var highlightedIcon = makeMarkerIcon('FFFF24');

// 	function addMarkers() {
// 		// The following group uses the location array to create an array of
// 		// markers on initialize.
// 		if ((map != null) && (locations.length > 0)) {
// 			for (var i = 0; i < locations.length; i++) {
// 				// Get the position from the location array.
// 			}
// 		}
// 		// Push the marker to our array of markers.
// 		// Create an onclick event to open the large infowindow at each marker.
// 		marker.addListener('click', function() {
// 			populateInfoWindow(this, largeInfowindow);
// 		});
// 		// Two event listeners - one for mouseover, one for mouseout,
// 		// to change the colors back and forth.
// 		marker.addListener('mouseover', function() {
// 			this.setIcon(highlightedIcon);
// 		});
// 		marker.addListener('mouseout', function() {
// 			this.setIcon(defaultIcon);
// 		});
// 	}

// 	document.getElementById('show-listings').addEventListener('click',
// 			showListings);
// 	document.getElementById('hide-listings').addEventListener('click',
// 			hideListings);

// 	document.getElementById('toggle-drawing').addEventListener('click',
// 			function() {
// 				toggleDrawing(drawingManager);
// 			});

// 	document.getElementById('zoom-to-area').addEventListener('click',
// 			function() {
// 				zoomToArea();
// 			});

// 	// Add an event listener so that the polygon is captured, call the
// 	// searchWithinPolygon function. This will show the markers in the polygon,
// 	// and hide any outside of it.
// 	drawingManager.addListener('overlaycomplete', function(event) {
// 		// First, check if there is an existing polygon.
// 		// If there is, get rid of it and remove the markers
// 		if (polygon) {
// 			polygon.setMap(null);
// 			hideListings(markers);
// 		}
// 		// Switching the drawing mode to the HAND (i.e., no longer drawing).
// 		drawingManager.setDrawingMode(null);
// 		// Creating a new editable polygon from the overlay.
// 		polygon = event.overlay;
// 		polygon.setEditable(true);
// 		// Searching within the polygon.
// 		searchWithinPolygon();
// 		// Make sure the search is re-done if the poly is changed.
// 		polygon.getPath().addListener('set_at', searchWithinPolygon);
// 		polygon.getPath().addListener('insert_at', searchWithinPolygon);
// 	});
// }

<<<<<<< HEAD
// This function takes the input value in the find nearby area text input
// locates it, and then zooms into that area. This is so that the user can
// show all listings, then decide to focus on one area of the map.
function zoomToArea() {
	// Initialize the geocoder.
	var geocoder = new google.maps.Geocoder();
	// Get the address or place that the user entered.
	
	
	console.log(address);
	// Make sure the address isn't blank.
	if (address == '') {
		window.alert('You must enter an area, or address.');
	} else {
		// Geocode the address/area entered to get the center. Then, center the
		// map
		// on it and zoom in
		geocoder
				.geocode(
						{
							address : address,
							componentRestrictions : {
								locality : 'Columbus'
							}
						},
						function(results, status) {
							if (status == google.maps.GeocoderStatus.OK) {
								locations.push(results.location);

								var position = results.location;
								
								// Create a marker per location, and put into markers array.
								var marker = new google.maps.Marker({
									position : position,
									name : name,
									animation : google.maps.Animation.DROP,
									icon : defaultIcon,
									id : i
								});

								markers.push(marker);
							}
								
							} else {
								window
										.alert('We could not find that location - try entering a more'
												+ ' specific place.');
							}
						});
	}

}
=======
// // This function takes the input value in the find nearby area text input
// // locates it, and then zooms into that area. This is so that the user can
// // show all listings, then decide to focus on one area of the map.
// function zoomToArea() {
// 	// Initialize the geocoder.
// 	var geocoder = new google.maps.Geocoder();
// 	// Get the address or place that the user entered.
// 	var address = document.getElementById('zoom-to-area-text').value;
// 	// Make sure the address isn't blank.
// 	if (address == '') {
// 		window.alert('You must enter an area, or address.');
// 	} else {
// 		// Geocode the address/area entered to get the center. Then, center the
// 		// map
// 		// on it and zoom in
// 		geocoder
// 				.geocode(
// 						{
// 							address : address,
// 							componentRestrictions : {
// 								locality : 'Columbus'
// 							}
// 						},
// 						function(results, status) {
// 							if (status == google.maps.GeocoderStatus.OK) {
// 								map.setCenter(results[0].geometry.location);
// 								map.setZoom(15);
// 							} else {
// 								window
// 										.alert('We could not find that location - try entering a more'
// 												+ ' specific place.');
// 							}
// 						});
// 	}
// }
>>>>>>> master

// // This function populates the infowindow when the marker is clicked. We'll only
// // allow
// // one infowindow which will open at the marker that is clicked, and populate
// // based
// // on that markers position.
// function populateInfoWindow(marker, infowindow) {
// 	// Check to make sure the infowindow is not already opened on this marker.
// 	if (infowindow.marker != marker) {
// 		// Clear the infowindow content to give the streetview time to load.
// 		infowindow.setContent('');
// 		infowindow.marker = marker;
// 		// Make sure the marker property is cleared if the infowindow is closed.
// 		infowindow.addListener('closeclick', function() {
// 			infowindow.marker = null;
// 		});
// 		var streetViewService = new google.maps.StreetViewService();
// 		var radius = 50;
// 		// In case the status is OK, which means the pano was found, compute the
// 		// position of the streetview image, then calculate the heading, then
// 		// get a
// 		// panorama from that and set the options
// 		function getStreetView(data, status) {
// 			if (status == google.maps.StreetViewStatus.OK) {
// 				var nearStreetViewLocation = data.location.latLng;
// 				var heading = google.maps.geometry.spherical.computeHeading(
// 						nearStreetViewLocation, marker.position);
// 				infowindow.setContent('<div>' + marker.title
// 						+ '</div><div id="pano"></div>');
// 				var panoramaOptions = {
// 					position : nearStreetViewLocation,
// 					pov : {
// 						heading : heading,
// 						pitch : 30
// 					}
// 				};
// 				var panorama = new google.maps.StreetViewPanorama(document
// 						.getElementById('pano'), panoramaOptions);
// 			} else {
// 				infowindow.setContent('<div>' + marker.title + '</div>'
// 						+ '<div>No Street View Found</div>');
// 			}
// 		}
// 		// Use streetview service to get the closest streetview image within
// 		// 50 meters of the markers position
// 		streetViewService.getPanoramaByLocation(marker.position, radius,
// 				getStreetView);
// 		// Open the infowindow on the correct marker.
// 		infowindow.open(map, marker);
// 	}
// }

// // This function will loop through the markers array and display them all.
// function showListings() {
// 	var bounds = new google.maps.LatLngBounds();
// 	// Extend the boundaries of the map for each marker and display the marker
// 	for (var i = 0; i < markers.length; i++) {
// 		markers[i].setMap(map);
// 		bounds.extend(markers[i].position);
// 	}
// 	map.fitBounds(bounds);
// }

// // This function will loop through the listings and hide them all.
// function hideListings() {
// 	for (var i = 0; i < markers.length; i++) {
// 		markers[i].setMap(null);
// 	}
// }

// // This function takes in a COLOR, and then creates a new marker
// // icon of that color. The icon will be 21 px wide by 34 high, have an origin
// // of 0, 0 and be anchored at 10, 34).
// function makeMarkerIcon(markerColor) {
// 	var markerImage = new google.maps.MarkerImage(
// 			'http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|'
// 					+ markerColor + '|40|_|%E2%80%A2', new google.maps.Size(21,
// 					34), new google.maps.Point(0, 0), new google.maps.Point(10,
// 					34), new google.maps.Size(21, 34));
// 	return markerImage;
// }

// // This shows and hides (respectively) the drawing options.
// function toggleDrawing(drawingManager) {
// 	if (drawingManager.map) {
// 		drawingManager.setMap(null);
// 		// In case the user drew anything, get rid of the polygon
// 		if (polygon !== null) {
// 			polygon.setMap(null);
// 		}
// 	} else {
// 		drawingManager.setMap(map);
// 	}
// }

// // This function hides all markers outside the polygon,
// // and shows only the ones within it. This is so that the
// // user can specify an exact area of search.
// function searchWithinPolygon() {
// 	for (var i = 0; i < markers.length; i++) {
// 		if (google.maps.geometry.poly.containsLocation(markers[i].position,
// 				polygon)) {
// 			markers[i].setMap(map);
// 		} else {
// 			markers[i].setMap(null);
// 		}
// 	}
// }

// // This function takes the input value in the find nearby area text input
// // locates it, and then zooms into that area. This is so that the user can
// // show all listings, then decide to focus on one area of the map.
// function zoomToArea() {
// 	// Initialize the geocoder.
// 	var geocoder = new google.maps.Geocoder();
// 	// Get the address or place that the user entered.
// 	var address = document.getElementById('zoom-to-area-text').value;
// 	// Make sure the address isn't blank.
// 	if (address == '') {
// 		window.alert('You must enter an area, or address.');
// 	} else {
// 		// Geocode the address/area entered to get the center. Then, center the
// 		// map
// 		// on it and zoom in
// 		geocoder
// 				.geocode(
// 						{
// 							address : address,
// 							componentRestrictions : {
// 								locality : 'Columbus'
// 							}
// 						},
// 						function(results, status) {
// 							if (status == google.maps.GeocoderStatus.OK) {
// 								map.setCenter(results[0].geometry.location);
// 								map.setZoom(15);
// 							} else {
// 								window
// 										.alert('We could not find that location - try entering a more'
// 												+ ' specific place.');
// 							}
// 						});
// 	}
// }

// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.querySelectorAll('.card-image');
console.log(img);
var modalImg = document.getElementsByClassName("modal-image");
for (var i = 0; i < img.length; i++) {
  // var captionText = document.getElementById("caption");
  img[i].addEventListener('click', function(event) {
    modal.style.display = "block";
    console.log(img);
    // modalImg.src = this.src;
    // captionText.innerHTML = this.alt;
  });

<<<<<<< HEAD
// This function takes the input value in the find nearby area text input
// locates it, and then zooms into that area. This is so that the user can
//*/ show all listings, then decide to focus on one area of the map.
=======
}
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};
>>>>>>> master
