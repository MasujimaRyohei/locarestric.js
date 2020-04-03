function getLocation(success, error) {
    navigator.geolocation.getCurrentPosition(
        function (position) {
            var currentLocation = { latitude: orgRound(position.coords.latitude, 1000), longitude: orgRound(position.coords.longitude, 1000) };
            success(currentLocation);
        },
        function (err) {
            console.warn(`ERROR(${err.code}): ${err.message}`);
            error(err);
        },
        {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        });
}

// location = { latitude: 0, longitude: 0 };
function restric(currentPosition, targetLocation) {
    if (currentPosition === null) {
        console.warn(`ERROR(Connect internet)`);
        return false;
    }
    return currentPosition.latitude === targetLocation.latitude
        && currentPosition.longitude === targetLocation.longitude;
}

function orgRound(value, base) {
    let num = value;
    num = num * base;
    num = Math.round(num);
    return num / base;
}

