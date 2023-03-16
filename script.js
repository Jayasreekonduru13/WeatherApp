let data;
const inputBox=document.getElementById("inputBox");
const countryName=document.getElementById("countryName");
const stateName=document.getElementById("stateName");
const cityTempContainer=document.getElementById("cityTempContainer");
const cityName1=document.getElementById("cityName1");
const cityName2=document.getElementById("cityName2");
const humidity=document.getElementById("humidity");
const windSpeed=document.getElementById("windSpeed");
const temperature1=document.getElementById("temperature1");
const temperature2=document.getElementById("temperature2");
const logoImage=document.getElementById("logoImage");
const weatherStatus=document.getElementById("weatherStatus");




const getData=async (event)=>{
    event.preventDefault();
    if(!inputBox.value){
        alert("Please Enter The City Name:");
        return;
    }

    const city=inputBox.value;

    //Fetch Details

    const fetchData=await fetch(`http://api.weatherapi.com/v1/current.json?key=ddb2dfc6340b447abea143130232002&q=${city}`);
    
    const orgData =await fetchData.json();
    data=orgData;
    
    console.log(data);
    
    

    //Displaying the data in the HTML
    cityTempContainer.classList.add("cityTempContainer");
    countryName.innerHTML=data.location.country;
    countryName.classList.add("results");
    stateName.innerHTML=data.location.region;
    stateName.classList.add("results");
    cityName1.innerHTML=data.location.name;
    //cityName1.classList.add("results");
    cityName2.innerHTML=data.location.name;
    cityName2.classList.add("results");
    humidity.innerHTML=data.current.humidity;
    humidity.classList.add("results");
    windSpeed.innerHTML=data.current.wind_kph;
    windSpeed.classList.add("results");
    temperature1.innerHTML=data.current.temp_c+'&#8451';
    //temperature1.classList.add("results");
    temperature2.innerHTML=data.current.temp_c;
    temperature2.classList.add("results");
    logoImage.src=data.current.condition.icon;
    logoImage.classList.add("results");
    weatherStatus.innerHTML=data.current.condition.text;
    weatherStatus.classList.add("results");

    

};
if (weatherStatus.textContent === "Sunny"){
    document.body.style.backgroundImage = "url('./img/Sunny.jpg')";
}

