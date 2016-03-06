//Initiate Google Map
$(function(){
    $.getJSON('data.json',function(data){
        console.log('success');
    })
});

function initMap(){
	var mapDiv = document.getElementById('map');
	var myLatLng = {lat:  1.334816, lng: 103.850744};
	var myLatLng2 = {lat:  1.333733, lng: 103.850583};
  var myLatLng3 = {lat: 1.331798, lng: 103.851315};
  var myLatLng4 = {lat: 1.33095, lng: 103.847633}
    var map = new google.maps.Map(mapDiv, {
    	center: myLatLng2,
      	zoom: 16,
    });

    var marker1 = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Hello World!'
  	});

  	var marker2 = new google.maps.Marker({
    position: myLatLng2,
    map: map,
    title: 'Hello World!'
  	});

    var marker3 = new google.maps.Marker({
    position: myLatLng3,
    map: map,
    title: 'Hello World!'
    });

    var marker4 = new google.maps.Marker({
    position: myLatLng4,
    map: map,
    title: 'Hello World!'
    });
}