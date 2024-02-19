

"use strict"
let inputSearch=document.getElementById('search');
let thisDay=document.getElementById('thisDay');
let dateOfThisDay=document.getElementById('dateOfThisDay');
let dateOfThisMonth=document.getElementById('dateOfThisMonth');
let nextDay=document.getElementById('nextDay');
let thredDay=document.getElementById('thredDay');
let keySearch=document.getElementById('keySearch');
let temOfThisDay=document.getElementById('temOfThisDay');
let imgOfThisDay=document.getElementById('imgOfThisDay');
let weatherApp=document.getElementById('weatherApp');
let imgOfNextDay=document.getElementById('imgOfNextDay');
let tempOfNextDayMax=document.getElementById('tempOfNextDayMax');
let tempOfNextDayMin=document.getElementById('tempOfNextDayMin');
let imgOfThredDay=document.getElementById('imgOfThredDay');
let tempOfThredDayMax=document.getElementById('tempOfThredDayMax');
let tempOfThredDayMin=document.getElementById('tempOfThredDayMin');
let weatherAppNext=document.getElementById('weatherAppNext');
let weatherAppThred=document.getElementById('weatherAppThred');
let subscribe=document.getElementById('subscribe');
let temps;
let currentDate = new Date();
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

if(inputSearch.value===''){
    getWeather('cairo');
}
 

async function getWeather(city) {
    var result= await fetch(`https://api.weatherapi.com/v1/forecast.json?key=7d77b96c972b4d119a3151101212704&q=${city}&days=3`);
    var finalResult=await result.json();
    weatherTemp(finalResult);
}


function weatherTemp(Results){
    thisDay.innerHTML=days[currentDate.getDay()];
    dateOfThisDay.innerHTML=currentDate.getDate();
    dateOfThisMonth.innerHTML=months[currentDate.getMonth()];
    nextDay.innerHTML=days[currentDate.getDay()+1];
    thredDay.innerHTML=days[currentDate.getDay()+2];
    keySearch.innerHTML=Results.location.name;
    temOfThisDay.innerHTML=Results.current.temp_c +'°C';
    imgOfThisDay.src='https:'+Results.current.condition.icon;
    weatherApp.innerHTML=Results.current.condition.text;
    imgOfNextDay.src='https:'+Results.forecast.forecastday[1].day.condition.icon;
    tempOfNextDayMax.innerHTML=Results.forecast.forecastday[1].day.maxtemp_c+'°C';
    tempOfNextDayMin.innerHTML=Results.forecast.forecastday[1].day.mintemp_c+'°';
    weatherAppNext.innerHTML=Results.forecast.forecastday[1].day.condition.text;
    imgOfThredDay.src='https:'+Results.forecast.forecastday[2].day.condition.icon;
    tempOfThredDayMax.innerHTML=Results.forecast.forecastday[2].day.maxtemp_c+'°C';
    tempOfThredDayMin.innerHTML=Results.forecast.forecastday[2].day.mintemp_c+'°';
    weatherAppThred.innerHTML=Results.forecast.forecastday[2].day.condition.text;

}

inputSearch.addEventListener('keyup',()=>{ 
    getWeather(inputSearch.value.toLowerCase());
})

subscribe.addEventListener('click',()=>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
})
