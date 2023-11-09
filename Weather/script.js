const apikey="3f498e4b5ebe4bdcbc500c571959325f";
const apikey2="4f440cab4802730d93d6091460279553";

const weatherData= document.querySelector(".weather-data")

const cityInput=document.getElementById("city")


const form=document.querySelector("form")

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const cityValue=city.value;
    getWeatherData(cityValue);
});

async function getWeatherData(cityValue){
    try {
        const response=await fetch(`https://api.openweathermap.org/data/2.5/weathere?q=${cityValue}&appid=${apikey2}&units=metric`)
        if(!response.ok){
            throw new Error("Network response is not ok")
        }
        const data= await response.json()
        console.log(data)
    } catch (error) {
        
    }
}