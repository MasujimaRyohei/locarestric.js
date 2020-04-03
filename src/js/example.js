exampleOutput();


function exampleOutput() {
    const currentCoordsElement = document.getElementById("current-coords");
    const targetCoordsElement = document.getElementById("target-coords");
    const resultElement = document.getElementById("result");
    const shibuhouseLocation = { latitude: 35.655, longitude: 139.696 }

    getLocation(function (position) {
        currentCoordsElement.innerHTML = position.latitude + ", " + position.longitude;
        targetCoordsElement.innerHTML = shibuhouseLocation.latitude + ", " + shibuhouseLocation.longitude;

        if (restric(position, shibuhouseLocation)) {
            resultElement.innerHTML = "Welcome!\nShibuhouse!";
        }
        else {
            resultElement.innerHTML = "Where you are?\nCome on Shibuhouse!";
        }
    });

}