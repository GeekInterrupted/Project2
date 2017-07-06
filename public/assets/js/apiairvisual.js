var queryURL = "http://api.airvisual.com//v2/city?country=USA&state=Texas&city=Houston&key=MaxqriLpiqXDbHxK8";

$.ajax({
    url: queryURL,
    method: "GET"
}).done(function(response) {

    var state = response.data.state
    console.log("this is the state " + " " + state);
    var city = response.data.city;
    console.log("this is the city :" + " " + city);




});