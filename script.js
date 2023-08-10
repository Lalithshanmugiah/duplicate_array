//remove duplicate array using set

function getUnique(arr){
//removing duplicate 
let uniqueArr = [...new Set(arr)];
console.log(uniqueArr)

}

let array = [1,2,2,3,4,3,4];
getUnique(array);


