//Initiate Global Var
//Map Marker for Thumbnail Click
var map_marker = [];

//----------------------------Google Map------------------------------------
function initMap(cnt){
  //Initiating Map, Center, and Zooms
	var mapDiv = document.getElementById('map');
  var mapCenter = {lat:  1.331798, lng: 103.851315};
  var map = new google.maps.Map(mapDiv, {
    center: mapCenter,
    zoom: 11,

  });

  //Load cnt attributes (cnt is from data.json)
  for (i in cnt){
    //Initiate Infowindow
    var infowindow = new google.maps.InfoWindow({
      maxWidth: 250,
      disableAutoPan: true,
      disableDefaultUI: true
    });

    //Create marker based on paces latitude and longitude
    var marker = new google.maps.Marker({
      position: {lat:  cnt[i].latitude, lng: cnt[i].longitude},
      map: map,
      icon: "img/" + i + ".png",
      title: cnt[i].name,
    });

    //Event Listener Whenever The User Click The Marker
    google.maps.event.addListener(marker, 'click', 
      (function(marker, i) {
      //Reference of this return function in function (marker,i) with some modifications
      //source: http://stackoverflow.com/questions/32798480/assign-infowindow-for-each-marker-in-google-maps
      return function() {
      var popovercontent = "<div style='width: 100%; height:350px; margin: 0px; background:white;'>" +
      "<img src='img/" + cnt[i].image + ".jpg' style='width:100%; height:150px; object-fit: cover; '>" + 
      "<h4 style='margin-left:10px; color: #a60b43;'>" + cnt[i].name + "</h4>" +
      "<div style='padding: 0px 10px; height: 120px; overflow-y: auto'>" +
      "<h5>Description</h5>" +
      "<p>" + cnt[i].description + "</p>" +
      "<h5>Gazzete Date</h5>" + 
      "<p>" + cnt[i].date + "</p>" +
      "<h5> More Info </h5>"
      "</div></div>";

      infowindow.setContent(popovercontent);
      infowindow.open(map, marker);
      // map.setCenter(marker.getPosition());
      map.setCenter({lat: cnt[i].latitude+0.008, lng: cnt[i].longitude});
        if (map.getZoom!=15){
        map.setZoom(15);
        }
      }
    })(marker, i));

    // Push the marker to the 'markers' array
    map_marker.push(marker);
  };

  //INFOWINDOW CUSTOMIZATION
  //This is a solution from the internet with modifications
  //source: "http://en.marnoto.com/2014/09/5-formas-de-personalizar-infowindow.html"
  google.maps.event.addListener(infowindow, 'domready', function() {

     // Reference to the DIV which receives the contents of the infowindow using jQuery
     var iwOuter = $('.gm-style-iw');

     /* The DIV we want to change is above the .gm-style-iw DIV.
      * So, we use jQuery and create a iwBackground variable,
      * and took advantage of the existing reference to .gm-style-iw for the previous DIV with .prev().
      */
     var iwBackground = iwOuter.prev();

     // Remove the background shadow DIV
     iwBackground.children(':nth-child(2)').css({'display' : 'none'});

     // Remove the white background DIV
     iwBackground.children(':nth-child(4)').css({'display' : 'none'});
     iwOuter.parent().parent().css({left: '10px'});
     // Moves the shadow of the arrow 131px to the left margin 
     iwBackground.children(':nth-child(1)').attr('style', function(i,s){ return s + 'left: 131px !important;'});

     // Moves the arrow 131px to the left margin 
     iwBackground.children(':nth-child(3)').attr('style', function(i,s){ return s + 'left: 131px !important;'});

     //ARROW MODIFICATIONS (Experimented on my own)
     iwBackground.children(':nth-child(3)').find('div').children().css({'box-shadow': 'none', 'z-index' : '1'});
     iwBackground.children(':nth-child(3)').css({'top' : '375px'});
     iwBackground.children(':nth-child(3)').find('div').css({'width' : '30px'});
     iwBackground.children(':nth-child(3)').children(':first-child').css({'left' : '-20px'});
     iwBackground.children(':nth-child(3)').children(':first-child').children().css({'transform' : 'skewX(50deg)'});
     iwBackground.children(':nth-child(3)').children(':last-child').children().css({'transform' : 'skewX(-50deg)', 'left' : '-6px'});
     // Taking advantage of the already established reference to
      // div .gm-style-iw with iwOuter variable.
      // You must set a new variable iwCloseBtn.
      // Using the .next() method of JQuery you reference the following div to .gm-style-iw.
      // Is this div that groups the close button elements.
      var iwCloseBtn = iwOuter.next();

      // Apply the desired effect to the close button
      iwCloseBtn.css({
      opacity: '1', // by default the close button has an opacity of 0.7
      right: '42px', top: '25px', // button repositioning
      });

      // The API automatically applies 0.7 opacity to the button after the mouseout event.
      // This function reverses this event to the desired value.
      iwCloseBtn.mouseout(function(){
        $(this).css({opacity: '1'});
      });
  });
}

//GET JSON FILE AND RUN INITMAP
$.getJSON("script/data.json", function(json) {
  initMap(json);
});

//A function applied to all thumbnails, load marker's infowindow
function myClick(id){
    $('html, body').animate({
        scrollTop: $("#map").offset().top - 100
    }, 500);
    //trigger the map_marker's index and its action: click (show info-window)
    google.maps.event.trigger(map_marker[id], 'click');
  }

//init the map since dont have callbacks in the script
// initMap();

