document.getElementById("registerConfirmation").addEventListener("click", function (event) {

    event.preventDefault();
    var email = document.getElementById("Email").value.toLowerCase();
    var password = document.getElementById("Password").value;

    firebase.auth().createUserWithEmailAndPassword(email, password).then(function (resp) {
        window.location.href = 'list.html'
    }).catch(function (error) {
        var errorMessage = error.message;
        alert(errorMessage)
    });
});

document.getElementById("backButton").addEventListener("click", function (event) {
    window.location.href = 'index.html'
});