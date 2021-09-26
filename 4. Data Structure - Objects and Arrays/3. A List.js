// A List

/* Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument. Also write a listToArray function that produces an array from a list. Then add a helper function prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list, and nth, which takes a list and a number and returns the element at the given position in the list (with zero referring to the first element) or undefined when there is no such element.

If you haven’t already, also write a recursive version of nth. */



let list = null;

function arrayToList(array){

    if (array.length==0) {
        return list;
    } 
    else {

        list={
            value:array[array.length-1],
            rest:list
        }
    
        return arrayToList(array.slice(0, array.length-1));
    }

}

// console.log(arrayToList([10,20,30,40]));
// → {value: 10, rest: {value: 20, rest: null}}





let arr = []
function listToArray(object){
    

    if(object.rest==null){

        arr.push(object.value);
        return arr;
    }
    else{
        arr.push(object.value, object.rest.value);
        return listToArray(object.rest)
    }
}

// console.log(listToArray(arrayToList([10, 20, 30, 40, 50, 60, 70, 80, 90, 100])));
// → [10, 20, 30]





function prepend(value, rest){
    return {
        value:value,
        rest:rest
    }
}

// console.log(prepend(10, prepend(20, prepend(30, null))));





function nth(object, position){
    if (object==null) {
        return undefined;
    } else if (position==0){
        return object.value;
    } else{
        return nth(object.rest, position-1);
    }
}

console.log(arrayToList([10, 20, 30]))
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
