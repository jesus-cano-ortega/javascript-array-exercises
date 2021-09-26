var people = ['juan','ana','michelle','daniella','stefany','lucy','barak', 'emilio'];

//your code below
function deletePerson(name){
    let newArray=[];

    for (let index = 0; index < people.length-1; index++) {
        if(people[index] != name){
            newArray.push(people[index]);
        }        
    }
    return newArray;
}

console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));