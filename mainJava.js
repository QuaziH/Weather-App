if (navigator.geolocation) {
    var api_url;
    navigator.geolocation.getCurrentPosition(function(position) {
        $("#data").html("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);
        api_url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + position.coords.latitude + '&lon=' + position.coords.longitude + '&units=imperial&appid=652d6f41ad0cb28b749ec584af19bddd';
        $.ajax({
            url : api_url,
            method : 'GET',
            success : function (data) {
                var tempr = data.main.temp;
                var location = data.name;
                var desc = data.weather.description;

                // $('#result').text(tempr + '° '  + location);

            }
        });
    });
}

function myLocationInput() {
    var locationToRun = document.getElementById("loc").submit();
    
    // var city_name =  locationToRun.substr(0,locationToRun.indexOf(' '));
    // var country_code = locationToRun.substr(locationToRun.indexOf(' ' + 1));
    // console.log(locationToRun);
    // if(city_name == true && country_code == true){
    //     var api_url = 'http://api.openweathermap.org/data/2.5/weather?q={'+ city_name +'},{'+ country_code +'}&units=imperial&appid=652d6f41ad0cb28b749ec584af19bddd';
    //
    // $.ajax({
    //     url: api_url,
    //     method: 'GET',
    //
    //     success: function () {
    //         var tempr = locationToRun.main.temp;
    //         var location = locationToRun.name;
    //         var desc = locationToRun.weather.description;
    //
    //         $('#result').text(tempr + '° ' + location);
    //
    //     }
    // });
    // }

}

