let list_of_numbers = [4, 80, 85, 59, 37,25, 5, 64, 66,	81,20, 64, 41, 22, 76,76, 55, 96, 2, 68];

// your code here
function mergeTwoList(input){

    let oddArray = []; 
    let evenArray = []; 

    input.forEach(function(item, index, arr){
        if(item%2 == 0){
            oddArray.push(item);
        } else {
            evenArray.push(item);
        }
    })

    let concatArray = evenArray.concat(oddArray);

    return concatArray;
}

console.log(mergeTwoList(list_of_numbers))
