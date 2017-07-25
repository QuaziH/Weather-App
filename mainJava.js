/**
 * Created by syedjavaid on 7/25/17.
 */


// Only change code below this line.
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
        $("#data").html("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);
    });
}
