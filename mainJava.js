// if (navigator.geolocation) {
//     var api_url;
//     navigator.geolocation.getCurrentPosition(function(position) {
//         $("#data").html("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);
//         api_url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + position.coords.latitude + '&lon=' + position.coords.longitude + '&units=imperial&appid=652d6f41ad0cb28b749ec584af19bddd';
//         $.ajax({
//             url : api_url,
//             method : 'GET',
//             success : function (data) {
//                 var tempr = data.main.temp;
//                 var location = data.name;
//                 var desc = data.weather.description;
//
//                 // $('#result').text(tempr + '° '  + location);
//
//             }
//         });
//     });
// }

function myLocationInput(location) {
    var city_name =  location.substr(0,location.indexOf(' '));
    var country_code = location.substr(location.indexOf(' ' + 1));
    var api_url = 'http://api.openweathermap.org/data/2.5/weather?q='+ city_name + country_code +'&units=imperial&appid=652d6f41ad0cb28b749ec584af19bddd';

    $.ajax({
        url: api_url,
        method: 'GET',

        success: function (data) {
            var tempr = data.main.temp;
            var location = data.name;
            var desc = data.weather.description;

            $('#result').text(tempr + '° ' + location);
        }
    });
}

