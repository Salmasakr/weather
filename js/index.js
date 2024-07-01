

 let submitData=document.getElementById("submitData");
 let searchInput=document.getElementById("searchInput");
 var weatherData;

async function getData(key){
    var respone=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=ab665c02dc384b38902150930242803&q=${key}&days=3`);
    var finalData=await respone.json();
    // console.log(finalData)
    return finalData;


}
async function startApp(key){


    weatherData=await getData(key);

    displayToday();
    displayTomorrow();
    displayThird();


    console.log(weatherData)
}
submitData.addEventListener('click',function(){
    startApp(searchInput.value);
})
function displayToday(){
    document.getElementById("time").innerHTML=weatherData.current.last_updated;

    document.getElementById("location").innerHTML=weatherData.location.name;
   
    document.getElementById("todayTemp").innerHTML=weatherData.current.temp_c+"°C";
    document.getElementById("icon").setAttribute('src',"https:"+weatherData.current.condition.icon);
    document.getElementById("text").innerHTML=weatherData.current.condition.text;
    document.getElementById("umberella").innerHTML=weatherData.current.vis_km+"%";
    document.getElementById("wind").innerHTML=weatherData.current.vis_miles+"km/h";
    document.getElementById("compass").innerHTML=weatherData.current.wind_dir;
    var z="https:"+weatherData.current.condition.icon;
console.log(z);




}
function displayTomorrow(){
    document.getElementById("tomorrowTime").innerHTML=weatherData.forecast.forecastday[1].date;
    document.getElementById("tomorrowIcon").setAttribute('src',"https:"+weatherData.forecast.forecastday[1].day.condition.icon);

    
    document.getElementById("tomorrowTemp").innerHTML=weatherData.forecast.forecastday[1].day.maxtemp_c+"°C";
    document.getElementById("tomorrowTempF").innerHTML=weatherData.forecast.forecastday[1].day.maxtemp_f+"°";
    document.getElementById("tomorrowText").innerHTML=weatherData.forecast.forecastday[1].day.condition.text;



}
function displayThird(){
    document.getElementById("thirdTime").innerHTML=weatherData.forecast.forecastday[2].date;
    document.getElementById("thirdIcon").setAttribute('src',"https:"+weatherData.forecast.forecastday[1].day.condition.icon);
    
    document.getElementById("thirdTemp").innerHTML=weatherData.forecast.forecastday[2].day.maxtemp_c+"°C";
    document.getElementById("thirdTempF").innerHTML=weatherData.forecast.forecastday[2].day.maxtemp_f+"°";
    document.getElementById("thirdText").innerHTML=weatherData.forecast.forecastday[2].day.condition.text;



}
