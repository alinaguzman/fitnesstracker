
var gps = {

  calcDistance: function(miles, original_lat, original_lng) {
    var meters = miles * 1609.344;
    var r = meters/111300
      , y0 = original_lat
      , x0 = original_lng
      , u = Math.random()
      , v = Math.random()
      , w = r * Math.sqrt(u)
      , t = 2 * Math.PI * v
      , x = w * Math.cos(t)
      , y1 = w * Math.sin(t)
      , x1 = x / Math.cos(y0)

    newY = y0 + y1;
    newX = x0 + x1;
    coordinates = {lat: newY, lng: newX};

    return coordinates
  },

  showMap: function() {
    var miles = $("#map").data("miles");
    console.log(miles)
    var empireStateBuilding = {lat: 40.7484405, lng: -73.9856644};
    var destination = gps.calcDistance(miles, 40.7484405,-73.9856644);

    var map = new google.maps.Map(document.getElementById('map'), {
      center: empireStateBuilding,
      scrollwheel: false,
      zoom: 10
    });

    var directionsDisplay = new google.maps.DirectionsRenderer({
      map: map
    });

  // Set destination, origin and travel mode.
  var request = {
    destination: destination,
    origin: empireStateBuilding,
    travelMode: google.maps.TravelMode.DRIVING
  };

  // Pass the directions request to the directions service.
  var directionsService = new google.maps.DirectionsService();
  directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      // Display the route on the map.
      directionsDisplay.setDirections(response);
    }
  });
}

};