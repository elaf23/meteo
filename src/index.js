function handleSearchSummit(event){
    event.preventDefault();
    let searchInput = document.querySelector("#search-form");
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = searchInput.value;
    
}

let searchFormElement = document.querySelector("#search-form")
searchFormElement.addEventListener("submit",handleSearchSummit)