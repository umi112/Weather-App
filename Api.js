let btn = document.getElementById("btn");
let input = document.getElementById("inp");

let country = document.getElementById("Country");
let localTime = document.getElementById("Time");
let temp = document.getElementById("Temp");

async function getData(cityName) {
    const promise = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=fb6fee23adf141c98ff121153240710&q=${cityName}&aqi=yes`
    );
    return await promise.json();
}

btn.addEventListener("click", async () => {
    const value = inp.value;
    const result = await getData(value);
    console.log(result);
    //for country name and city name
    country.innerText = `${result.location.name}, ${result.location.country},${result.location.region}`;
    // For localtime
    localTime.innerText = result.location.localtime;
    // for temp
    temp.innerText = result.current.temp_c;
});
