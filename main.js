const locations = [[1, 1], [1, 2], [1, 3], [2, 1], [2, 2], [2, 3]];
let invalidLocation = false;

for (let k = 0; k < locations.length; k++) {
        let currentLocation = locations[k];
        console.log(currentLocation)

        if (currentLocation[0] > 2) {
                invalidLocation = true;
        }
        if (invalidLocation) {
                document.querySelector(".output").innerHTML += "This location is invalid";
        } else {
                document.querySelector(".output").innerHTML += "this is a valid location";
        }
}
