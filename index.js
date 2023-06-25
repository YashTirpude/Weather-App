const submit = document.getElementById("submit")
const cityName = document.getElementById("cityName")


const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key":'908c0d41a2mshd1f98c9a4a46b79p1c3e6ejsnacd65abb6549',
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com"


  }
};

const getWeather = (city) => {
  cityName.innerHTML = city

  fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then((response) => {
      console.log(response)

      {
        document.getElementById("temp").innerHTML = response.temp
        document.getElementById("humidity").innerHTML = response.humidity
        document.getElementById("feels_like").innerHTML = response.feels_like
        document.getElementById("wind_speed").innerHTML = response.wind_speed
        document.getElementById("min_temp").innerHTML = response.min_temp
        document.getElementById("max_temp").innerHTML = response.max_temp
        document.getElementById("wind_degrees").innerHTML = response.wind_degrees

        document.getElementById("temp2").innerHTML = response.temp
        document.getElementById("humidity2").innerHTML = response.humidity
        document.getElementById("feels_like").innerHTML = response.feels_like
        document.getElementById("wind_speed2").innerHTML = response.wind_speed
        document.getElementById("min_temp").innerHTML = response.min_temp
        document.getElementById("max_temp").innerHTML = response.max_temp
        document.getElementById("wind_degrees").innerHTML = response.wind_degrees
      }
    })
    .catch(err => console.log(err))
}



submit.addEventListener("click", (e) => {
  e.preventDefault()
  getWeather(city.value)
})
getWeather("Delhi")


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Goa', options)
  .then(response => response.json())
  .then((response) => {
    console.log(response)
    {
      document.getElementById("temp3").innerHTML = response.temp
      document.getElementById("humidity3").innerHTML = response.humidity
      document.getElementById("feels_like3").innerHTML = response.feels_like
      document.getElementById("wind_speed3").innerHTML = response.wind_speed
    }
  })
  .catch(err => console.log(err))

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Manali', options)
  .then(response => response.json())
  .then((response) => {
    console.log(response)
    {
      document.getElementById("temp4").innerHTML = response.temp
      document.getElementById("humidity4").innerHTML = response.humidity
      document.getElementById("feels_like4").innerHTML = response.feels_like
      document.getElementById("wind_speed4").innerHTML = response.wind_speed
    }
  })
  .catch(err => console.log(err))

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=New York', options)
  .then(response => response.json())
  .then((response) => {
    console.log(response)
    {
      document.getElementById("temp5").innerHTML = response.temp
      document.getElementById("humidity5").innerHTML = response.humidity
      document.getElementById("feels_like5").innerHTML = response.feels_like
      document.getElementById("wind_speed5").innerHTML = response.wind_speed
    }
  })
  .catch(err => console.log(err))

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=tokyo', options)
  .then(response => response.json())
  .then((response) => {
    console.log(response)
    {
      document.getElementById("temp6").innerHTML = response.temp
      document.getElementById("humidity6").innerHTML = response.humidity
      document.getElementById("feels_like6").innerHTML = response.feels_like
      document.getElementById("wind_speed6").innerHTML = response.wind_speed
    }
  })
  .catch(err => console.log(err))



  
if("serviceWorker" in navigator){
  navigator.serviceWorker.register("sw.js").then(registration =>{
    console.log("SW Registered!"); 
    console.log(registration); 
  }).catch(error =>{
    console.log("SW Registration Failed!");
    console.log(error);  
  })
}









