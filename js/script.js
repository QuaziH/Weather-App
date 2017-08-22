var currentTemp;
var currentArea;
var currentDesc;
var currentIcon;


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
                currentIcon = data.weather.icon;

                // $('#result').text(tempr + '° '  + location);
            }
        });
    });
} else {
    $('#result').text("Your browser does not support geolocation.");
}
  
function myLocation(){
    $('#result').text(tempr + '° ');
    $('#icon').attr("src",'http://openweathermap.org/img/w/' + icon_url + '.png');
    $('#desc').text(location);
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
                var icon_url = data.weather[0].icon;

                $('#result').text(tempr + '° ');
                $('#icon').attr("src",'http://openweathermap.org/img/w/' + icon_url + '.png');
                $('#desc').text(location);
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
                var desc = data.weather[0].main;
                var icon_url = data.weather[0].icon;

                $('#result').text(tempr + '° ');
                $('#icon').attr("src",'http://openweathermap.org/img/w/' + icon_url + '.png');
                $('#desc').text(location);
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
                var icon_url = data.weather[0].icon;

                $('#result').text(tempr + '° ');
                $('#icon').attr("src",'http://openweathermap.org/img/w/' + icon_url + '.png');
                $('#desc').text(location);
            }
        });
    }
}

function clearFields() {
    document.getElementById("place").value = "";
}

