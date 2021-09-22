// Looping a triangle
// Write a loop that makes seven calls to console.log to output the following triangle:

// #
// ##
// ###
// ####
// #####
// ######
// #######



// // Method 1 
// let triangle = '#';

// do{
//     console.log(triangle);
//     triangle += '#';
// }
// while(triangle.length<9);


// // Method 2
// for (let index = 1; index < 9; index++) {
//     console.log('#'.repeat(index)); 
//     //think of it as multiplying string with number to repeat that string follwing times  
// }


// Method 3
let newTriangle = '#';

while (newTriangle.length<9) {
    console.log(newTriangle);
    newTriangle += '#';
}

