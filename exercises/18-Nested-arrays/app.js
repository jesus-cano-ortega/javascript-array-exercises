var coordinatesArray = [[33.747252,-112.633853],[-33.867886, -63.987],[41.303921, -81.901693],[-33.350534, -71.653268]];

let output = [];

for (let index in coordinatesArray){
    output.push(coordinatesArray[index][1]);
}

for (let index = 0; index < output.length; index++) {
    console.log(output[index]);
}
