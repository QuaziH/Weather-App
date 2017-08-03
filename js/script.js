var currentTemp;
var currentArea;
var currentDesc;

if (navigator.geolocation) {
    var api_url;
    navigator.geolocation.getCurrentPosition(function(position) {
        api_url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + position.coords.latitude + '&lon=' + position.coords.longitude + '&units=imperial&appid=652d6f41ad0cb28b749ec584af19bddd';
        $.ajax({
            url : api_url,
            method : 'GET',
            success : function (data) {
                 currentTemp = data.main.temp;
                 currentArea = data.name;
                 currentDesc = data.weather[0].description;

                 // $('#result').text(tempr + '° '  + location);
            }
        });
    });
} else {
    $('#result').text("Your browser does not support geolocation.");
}

function myLocation(){
    $('#result').text(currentTemp + '° '  + currentArea + ' ' + currentDesc);
}

function myLocationInput(location) {
    if (!isNaN(location)) {
        var api_url = 'http://api.openweathermap.org/data/2.5/weather?zip=' + location + '&units=imperial&appid=652d6f41ad0cb28b749ec584af19bddd';

        $.ajax({
            url: api_url,
            method: 'GET',

            success: function (data) {
                var tempr = data.main.temp;
                var location = data.name;
                var desc = data.weather[0].description;

                $('#result').text(tempr + '° ' + location + ' ' + desc);
            }
        });
    }
    else if (location.indexOf(',') > -1) {
        var city_name = location.substr(0, location.indexOf(','));
        var country_code = location.substr(location.indexOf(',' + 1));

        api_url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city_name + ',' + country_code + '&units=imperial&appid=652d6f41ad0cb28b749ec584af19bddd';

        $.ajax({
            url: api_url,
            method: 'GET',

            success: function (data) {
                var tempr = data.main.temp;
                var location = data.name;
                var desc = data.weather[0].description;

                $('#result').text(tempr + '° ' + location + ' ' + desc);
            }
        });
    }
    else {
        api_url = 'http://api.openweathermap.org/data/2.5/weather?q=' + location + '&units=imperial&appid=652d6f41ad0cb28b749ec584af19bddd';

        $.ajax({
            url: api_url,
            method: 'GET',

            success: function (data) {
                var tempr = data.main.temp;
                var location = data.name;
                var desc = data.weather[0].description;

                $('#result').text(tempr + '° ' + location + ' ' + desc);
            }
        });
    }
}

function clearFields() {
    document.getElementById("place").value = "";
}

