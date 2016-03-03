console.log("Hello world");

$(document).ready(function() {
    console.log("rejoice - jquery is enabled!");
});

//https://raw.githubusercontent.com/jeremywrnr/jeremywrnr.github.io/master/weather.json
$.getJSON("https://raw.githubusercontent.com/jeremywrnr/jeremywrnr.github.io/master/weather.json", function(data) {
    var items = [];
    var sum=0;
    $.each( data, function( key, val ) {
    if((key==="TimeEST") || (key==="TemperatureF"))
    {
        items.push( "<li id='" + key + "'>" + val + "</li>" );
        sum += val;
    }
    console.log("Sum: " + sum);
    //console.log("Avg: " + sum/items.length);
    $(".weather").append(items.join(""));
    });
    
    $("???").appendTo("#temperature");
});