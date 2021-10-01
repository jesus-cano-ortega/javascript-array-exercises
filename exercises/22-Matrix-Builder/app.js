// Code goes here
function matrixBuilder(number){

    let myArray1 = [];

    for (var i = 0; i < number; i++){
      myArray1[i] = [];
      for (var j = 0; j < number; j++){
        myArray1[i][j] = Math.round(Math.random());
      }
    }
  
    return myArray1;

}

// do not change anything from this line down
console.log(matrixBuilder(5))