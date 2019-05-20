document.getElementById("searchButton").addEventListener("click", function (event) {

    var poke = document.getElementById("pokemonNane").value;


    var pokeSearch;
    pokeSearch = new XMLHttpRequest();
    pokeSearch.responseType = 'json';
    pokeSearch.open("GET", 'https://pokeapi.co/api/v2/pokemon/' + poke, true);


    pokeSearch.onreadystatechange = function (e) {
        if (pokeSearch.readyState == 4) {
            document.getElementById("pokeName").textContent = "Searched pokemon: " + pokeSearch.response.name;
            document.getElementById("pokeId").textContent = "Pokemon ID: " + pokeSearch.response.id;
            document.getElementById("pokeWeight").textContent = "Pokemon Weight: " + pokeSearch.response.weight + ".00";
            document.getElementById("pokeHeight").textContent = "Pokemon Height: " + pokeSearch.response.height + ".00";

        }
    }
    pokeSearch.send();

});