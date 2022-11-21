var haight;
var oceanBeach;
var prudential;
var theHill;
var directionsService;
var directionsRenderer;
var end;
var start;

function initMapMarker()
{
  directionsService = new google.maps.DirectionsService();
  directionsRenderer = new google.maps.DirectionsRenderer();
  haight = new google.maps.LatLng(37.7699298, -122.4469157);
  oceanBeach = new google.maps.LatLng(37.7683909618184, -122.51089453697205);  
  prudential = new google.maps.LatLng(37.795187, -122.402778);
  theHill = new google.maps.LatLng(37.803617, -122.418479);
  
  end = haight;
  start = oceanBeach;
  var mapOptions = {
    zoom: 14,
    center: haight
  }
  var map = new google.maps.Map(document.getElementById('map'), mapOptions);
  directionsRenderer.setMap(map);

	
}

function setOriginDestination()
{
	
var selectedDestination = document.getElementById('Destination').value;
var selectedOrigin = document.getElementById('Origin').value;
var selectedMode = document.getElementById('mode').value;


//alert(selectedDestination);
if(selectedDestination == 'Haight')
{
	end = haight;
}
if(selectedDestination == 'Prudential')
{
	end = prudential;
}
if(selectedDestination == 'OceanBeach')
{
	end = oceanBeach;
}
if(selectedDestination == 'TheHill')
{
	end = theHill;
}

if(selectedOrigin == 'Haight')
{
	start = haight;
}
if(selectedOrigin == 'Prudential')
{
	start = prudential;
}
if(selectedOrigin == 'OceanBeach')
{
	start = oceanBeach;
}
if(selectedOrigin == 'TheHill')
{
	start = theHill;
}

calcRoute();


}



function calcRoute() {
  var selectedMode = document.getElementById('mode').value;
  var request = {
      origin: start,
      destination: end,
      // Note that JavaScript allows us to access the constant
      // using square brackets and a string value as its
      // "property."
      travelMode: google.maps.TravelMode[selectedMode]
  };
  directionsService.route(request, function(response, status) {
    if (status == 'OK') {
      directionsRenderer.setDirections(response);
    }
  });
}