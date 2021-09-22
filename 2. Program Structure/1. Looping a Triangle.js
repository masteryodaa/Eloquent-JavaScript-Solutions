// Looping a triangle
// Write a loop that makes seven calls to console.log to output the following triangle:

// #
// ##
// ###
// ####
// #####
// ######
// #######

let triangle = '#';

do{
    console.log(triangle);
    triangle += '#';
}
while(triangle.length<9);



for (let index = 1; index < 9; index++) {
    console.log('#'.repeat(index)); 
    //think of it as multiplying string with number to repeat that string follwing times  
}



let newTriangle = '#';

while (newTriangle.length<9) {
    console.log(newTriangle);
    newTriangle += '#';
}

