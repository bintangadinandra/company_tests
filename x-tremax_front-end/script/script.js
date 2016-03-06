//Initiate Google Map

var places;
var map_marker = [];

//Sychronus
$.ajax({
    async: false,
    url: "script/data.json",
    success: function(json) {
        console.log("Sychronously Success");
        places = $.parseJSON(json);
    }
});

//AJAX
// $.getJSON("script/data.json", function(json) {
//     // this will show the info it in firebug console

// });

function initMap(){
	var mapDiv = document.getElementById('map');
  var mapCenter = {lat:  1.331798, lng: 103.851315};
  var map = new google.maps.Map(mapDiv, {
      center: mapCenter,
        zoom: 11,
  });

  for (i in places){
    var infowindow = new google.maps.InfoWindow({
    });

    var marker = new google.maps.Marker({
    position: {lat:  places[i].latitude, lng: places[i].longitude},
    map: map,
    icon: "img/" + i + ".png",
    title: places[i].name});

    //Event Listener Whenever The User Click The Pin
    google.maps.event.addListener(marker, 'click', 
      (function(marker, i) {
      return function() {
      var popovercontent = "<div style='width: 250px; height:350px; margin: 0px; background:white'>" +
      "<img src='img/" + places[i].image + ".jpg' style='width:100%; height:150px; object-fit: cover; '>" + 
      "<h4 style='margin-left:10px'>" + places[i].name + "</h4>" +
      "<div style='padding: 0px 10px; height: 120px; overflow-y: auto'>" +
      "<h5>Description</h5>" +
      "<p>Lorem ipsum dolor sit amet, ad facer eripuit commune sit. Eum platonem salutandi explicari no, pro accumsan suavitate conceptam te. Enim libris</p>" +
      "<h5>Gazzete Date</h5>" + 
      "<p>20 July</p>" +
      "</div></div>";
      var boxText = document.createElement("div");
      boxText.style.cssText = "border: 1px solid black; margin-top: 8px; background: yellow; padding: 5px;";
      boxText.innerHTML = "City Hall, Sechelt<br>British Columbia<br>Canada";

      var myOptions = {
        alignBottom: true
         ,content: popovercontent
        ,disableAutoPan: false
        ,maxWidth: 0
        ,pixelOffset: new google.maps.Size(-140, 0)
        ,zIndex: null
        ,closeBoxMargin: "0px"
        ,closeBoxURL: "http://www.google.com/intl/en_us/mapfiles/close.gif"
        ,infoBoxClearance: new google.maps.Size(1, 1)
        ,isHidden: false
        ,pane: "floatPane"
        ,enableEventPropagation: false
      };

      var ib = new InfoBox(myOptions);

      // infowindow.setContent(popovercontent);
      // infowindow.open(map, marker);
      ib.open(map,marker);
      map.setCenter(marker.getPosition());
        if (map.getZoom!=15){
        map.setZoom(15);
      }
      }
    })(marker, i));

    // Push the marker to the 'markers' array
    map_marker.push(marker);

    // The function to trigger the marker click, 'id' is the reference index to the 'markers' array.
  };
}

function myClick(id){
  $('html, body').animate({
      scrollTop: $("#map").offset().top
  }, 500);
  google.maps.event.trigger(map_marker[id], 'click');
}

function generatePop(marker, i) {
      return function() {

      var popovercontent = "<div style='width:100%; height:350px; border: 1px solid #eee;'>" +
      "<img src='img/" + places[i].image + ".jpg' style='width:100%; height:150px; object-fit: cover; '>" + 
      "<h4 style='margin-left:10px'>" + places[i].name + "</h4>" +
      "<div style='padding: 0px 10px; height: 150px; overflow-y: auto'>" +
      "<h5>Description</h5>" +
      "<p>Lorem ipsum dolor sit amet, ad facer eripuit commune sit. Eum platonem salutandi explicari no, pro accumsan suavitate conceptam te. Enim libris</p>" +
      "<h5>Gazzete Date</h5>" + 
      "<p>20 July</p>" +
      "</div></div>";
         infowindow.setContent(popovercontent);
         infowindow.open(map, marker);
         map.setCenter(marker.getPosition());
         map.setZoom(15);
      }
}

initMap();

