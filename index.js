if(navigator.geolocation){
   navigator.geolocation.getCurrentPosition(function(position){
         $('.geoloc').html("latitude: " + position.coords.latitude + "<br/>" + "longitude: " + position.coords.longitude);
      });
}