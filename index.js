const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric";

const apikey="e13645f6630519df295ad2476f9ea496";


const searchbox=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");
const weather=document.querySelector(".weather-icon");




async function checkwhether(city) {

    const response=await fetch(apiurl +`&q=${city}&appid=${apikey}`);

    var data=await response.json();
    console.log(data);
document.querySelector(".city").innerHTML=data.name;
document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";
document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";

if(data.weather[0].main=="Clear")
{
    weather.src="./images/weather-app-img/images/clear.png";
}

else if( data.weather[0].main=="Rain")
{
    weather.src="./images/weather-app-img/images/rain.png";
}

else if( data.weather[0].main=="Clouds")
{
    weather.src="./images/weather-app-img/images/clouds.png";
}

else if( data.weather[0].main=="Drizzle")
{
    weather.src="./images/weather-app-img/images/drizzle.png";
}

else if( data.weather[0].main=="Mist")
{
    weather.src="./images/weather-app-img/images/mist.png";
}

else if( data.weather[0].main=="Snow")
{
    weather.src="./images/weather-app-img/images/snow.png";
}



else{

    weather.src="./images/weather-app-img/images/clear.png";
}


document.querySelector(".weather").style.display="block";


    
}





searchbox.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        checkwhether(searchbox.value);
    }
});



searchbtn.addEventListener("click",()=>
{
    checkwhether(searchbox.value);
})



