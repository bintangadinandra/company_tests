//Initiate Google Map
function initMap(){
	var mapDiv = document.getElementById('map');
	var myLatLng = {lat:  1.334816, lng: 103.850744};
	var myLatLng2 = {lat:  1.333733, lng: 103.850583}
    var map = new google.maps.Map(mapDiv, {
    	center: {lat:  1.334816, lng: 103.850744},
      	zoom: 11
    });

    var marker1 = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Hello World!'
  	});

  	var marker2 = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Hello World!'
  	});
}