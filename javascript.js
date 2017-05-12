$(document).ready(function(){

  var long;
  var lat;
 
 $.getJSON("http://ip-api.com/json", function(data2){
    lat = data2.lat;
   long = data2.lon;
   
   // Create API with geolocation
      var api = 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&appid=04d5f8a16cdd806fe0a488fde2c8e156';
      
      $.getJSON(api, function(data){
        var fTemp;
        var cTemp;
        var tempSwap = true;
        var weatherType = data.weather[0].description;
        var kTemp = data.main.temp;
        var windSpeed = data.wind.speed;
        var city = data.name;
        
        // temp in kelvin
        fTemp = (kTemp*(9/5)-459.67).toFixed(1);
        cTemp = (kTemp-273).toFixed(1);
        
        console.log(city);
        $("#city").html(city);
        $("#weatherType").html(weatherType);
        $("#fTemp").html(fTemp + " &#8457;");
        $("#fTemp").click(function(){
            if(tempSwap === false){
            $("#fTemp").html(fTemp + " &#8457;");
              tempSwap = true;
            } else {
              $("#fTemp").html(cTemp + " &#8451;");
              tempSwap = false;
            }
        });
        windSpeed = (2.237*(windSpeed)).toFixed(1);
            $("#windSpeed").html(windSpeed + " mph");

        // Change backgrounds depending on temp
        
         if(fTemp >= 80){
               //hot bg
               $('body').addClass('hot');
           } else if (fTemp > 70 && fTemp < 80){
               //warm
               $('body').removeClass('hot').addClass('warm');     
           } 
              else if (fTemp > 60 && fTemp < 70){
               //mild
                   $('body').removeClass('hot').addClass('mild');                 } 
              else if (fTemp > 50 && fTemp < 60){
               //cold
                $('body').removeClass('hot').addClass('cold');       
           } 
            else {
              //freezing
               $('body').removeClass('hot').addClass('freezing');   
            }
                      
           }); 
 });
      
      
  });  