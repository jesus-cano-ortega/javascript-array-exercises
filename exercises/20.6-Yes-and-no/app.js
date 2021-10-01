let theBools = [0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1];

//your code here
function myFunction(params){
    if(params === 0){return "woko"}
    else if(params === 1){return "wiki"}
}

console.log(theBools.map(myFunction));
