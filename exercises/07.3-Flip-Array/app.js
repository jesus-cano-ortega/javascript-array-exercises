var arr = [45,67,87,23,5,32,60];

//Your code here.
let newArray = []

for(let index = arr.length - 1; index >= 0; index--){
    
    let element = arr[index];
    newArray.push(element);
}

console.log(newArray)