<<<<<<< HEAD
var myTempr;
var myArea;
var myDesc;

if (navigator.geolocation) {
    var api_url;
    navigator.geolocation.getCurrentPosition(function(position) {
        api_url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + position.coords.latitude + '&lon=' + position.coords.longitude + '&units=imperial&appid=652d6f41ad0cb28b749ec584af19bddd';
        $.ajax({
            url : api_url,
            method : 'GET',
            success : function (data) {
                 myTempr = data.main.temp;
                 myArea = data.name;
                 myDesc = data.weather.description;

                 // $('#result').text(tempr + '° '  + location);

            }
        });
    });
}
function myLocation(){

    $('#result').text(myTempr + '° '  + myArea);


}

$("#place").on("keydown",function search(e) {
    if(e.keyCode == 13) {
        myLocationInput(document.getElementById('place').value);
    }
});
function search(ele) {
    if(event.keyCode == 13) {
        alert(ele.value);
    }

}
function myLocationInput(location) {

    if (isNaN(location) == false) {
        var api_url = 'http://api.openweathermap.org/data/2.5/weather?zip=' + location + '&units=imperial&appid=652d6f41ad0cb28b749ec584af19bddd';
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
    if (location.indexOf(',') > -1) {
        var city_name = location.substr(0, location.indexOf(' '));
        var country_code = location.substr(location.indexOf(' ' + 1));


        var api_url = 'http://api.openweathermap.org/data/2.5/weather?q={' + city_name + '},{' + country_code + '}&units=imperial&appid=652d6f41ad0cb28b749ec584af19bddd';

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
    else {

        var api_url = 'http://api.openweathermap.org/data/2.5/weather?q={' + location + '}&units=imperial&appid=652d6f41ad0cb28b749ec584af19bddd';

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
}

function ClearFields() {

    document.getElementById("place").value = "";
=======
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
//                 $('#result').text(tempr + '° '  + location);
//
//             }
//         });
//     });
// }

function myLocationInput(location) {
    // var city_name =  location.substr(0,location.indexOf(' '));
    var api_url = 'http://api.openweathermap.org/data/2.5/weather?q=' + location + '&units=imperial&appid=652d6f41ad0cb28b749ec584af19bddd';

    $.ajax({
        url: api_url,
        method: 'GET',

        success: function (data) {
            var tempr = data.main.temp;
            var location = data.name;
            var desc = data.weather.description;

            $('#result').text(tempr + '° ' + location + ' ' + desc);
        }
    });
}

>>>>>>> 50623c506e8b416d56617a664885ffa5a4e77d59


