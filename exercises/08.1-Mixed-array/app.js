var mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

//your code here
var newArray = [];
for (let index = 0; index < mix.length; index++){

    newArray.push(typeof mix[index]);

}
console.log(newArray);