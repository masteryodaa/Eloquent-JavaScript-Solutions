// The sum of a range

// The introduction of this book alluded to the following as a nice way to compute the sum of a range of numbers:

// console.log(sum(range(1, 10)));
// Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.

// Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55.

// As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used when building the array. If no step is given, the elements go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].



let arr = [];

function range(start,end, step=1){


        if (start<end && step>0) {
            arr.push(start);
            return range(start+step,end, step);
        } 
        else if(start>end && step<0){
            arr.push(start);
            return range(start+step,end, step);
        }
        
        else if((start<end && step<0) || (start>end && step>0)){
            return arr;
        }
       
        else if((start==end && step<0) || (start==end && step>0)){
            arr.push(start);
            return arr;
        }
        else if((start<0 && step<0) || (start>0 && step<0) ){
            console.log('wrong input!!!')
        }
        else {
            
            arr.push(start);
            return arr;
        }
}

// console.log(range(-7, 2, -7));



let total=0;
function sum(array){
  
    // for(let i=0; i<=array.length-1; i++){     //for(let item of array)
    //     total+=array[i];
    // }

    total+=array[0];
    array=array.slice(1);
    
    if(array.length==0){
        return total;
    } else return sum(array);
 
}



console.log(sum(range(1, 10)));
// → 55






