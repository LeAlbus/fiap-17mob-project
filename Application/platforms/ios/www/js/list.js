document.getElementById("searchButton").addEventListener("click", function (event) {

    var poke = document.getElementById("pokemonNane").value;

    pokeSearch = new XMLHttpRequest();
    pokeSearch.responseType = 'json';
    pokeSearch.open("GET", 'https://pokeapi.co/api/v2/pokemon/' + poke.toLowerCase(), true);


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

document.getElementById('quitButton').addEventListener('click', function () {
    firebase.auth().signOut().then(function () {
        window.location.href = 'index.html'
    }, function (error) {
        console.log('error logout')
    });
});

document.getElementById('pictureButton').addEventListener('click', function () {
    let options = {
        quality: 40,
        destinationType: Camera.DestinationType.DATA_URL,
        encodingType: Camera.EncodingType.JPEG,
        mediaType: Camera.MediaType.PICTURE,
        targetWidth: 720,
        correctOrientation: true
    };

    takePicture(options);
});

var takePicture = (options) => {
    navigator.camera.getPicture((image_data) => {
        var image = document.getElementById('picture');
        image.src = "data:image/jpeg;base64," + image_data;
    },
        (error) => {
            console.log(error)
        }, options)
}
