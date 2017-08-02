if (navigator.geolocation) {
    var api_url;
    navigator.geolocation.getCurrentPosition(function(position) {
        $("#data").html("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);
        api_url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + position.coords.latitude + '&lon=' + position.coords.longitude + '&units=metric&appid=652d6f41ad0cb28b749ec584af19bddd';
        $.ajax({
            url : api_url,
            method : 'GET',
            success : function (data) {
                var tempr = data.main.temp;
                var location = data.name;
                var desc = data.weather.description;

                $('#result').text(tempr + '° ' + location);

            }
        });
    });
}

function myLocationInput() {
    var locationToRun = document.getElementById("loc").submit();


}

