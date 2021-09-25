// Reversing an array

// Arrays have a reverse method that changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method.


let newArr = [];

function reverseArray(array){

    newArr.unshift(array[0]);
    array=array.slice(1);

    if (array.length==0) {
        return newArr;
    } else return reverseArray(array);
}
// let x=[1,2,3];
// console.log(reverseArray(x));






function reverseArrayInPlace(array, start=0,end=-1){
    
    if (start+1==array.length/2) {
        return array;
    } else if(start+1==Math.floor(array.length/2)) {
        return array;
    } else{
        let temp = array[start];
        array[start]=array.slice(end)[0];
        array[array.length+end]=temp;
        return reverseArrayInPlace(array,start+1,end-1);
    }
}

let arrayValue = [1, 2, 3, 4, 5,];

console.log(reverseArrayInPlace(arrayValue));

console.log(arrayValue);
// → [5, 4, 3, 2, 1]