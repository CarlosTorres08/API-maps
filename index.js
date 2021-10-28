var lat;
var lon;
function getLocation(){
  if(!navigator.geolocation)
    return null;
  navigator.geolocation.getCurrentPosition((pos)=> {
    lat = document.getElementById('lat').innerText = pos.coords.latitude;
    lon = document.getElementById('lon').innerText = pos.coords.longitude;
    initmap;
  })
}


let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -33, lng: -53 },
    zoom: 8,
  });
}

 getLocation();
