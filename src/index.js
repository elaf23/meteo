function refreshWeather(response){
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = response.data.temperature.current;
    let cityElement = document.querySelector("#city");

}

function searchCity(city){
    //separation of concern
    let apikey = "a47b30a421t0934fof6e965dc17a0c63";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apikey}&units=metric`;
    axios.get(apiUrl).then(refreshWeather);
}   
function handleSearchSummit(event){
    event.preventDefault();
    let searchInput = document.querySelector("#search-form");
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = searchInput.value;
    searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form")
searchFormElement.addEventListener("submit",handleSearchSummit)