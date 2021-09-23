// Chessboard

// Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

// Passing this string to console.log should show something like this:

//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # #


// Method 1
// const size = 10; // mxm grid


// for(let i=1; i<=size; i++){


//     var row = " #".repeat(size/2);

//     if (i%2==0) {

//         function reverse(x){
//             return x.split("").reverse().join("");
//         }
//         console.log(reverse(row));

//     } else {
//         console.log(row)
//     }

// }



// Method 2
// const size = 8; //mxm grid

// for (let i=1; i<=size; i++){

//     const black = " ";
//     const white = "#";
//     let row = black+white;

//     function repeat(str, num){

//         var repeatstr = ""

//         while(num>0){
//             repeatstr += str;
//             num--;
//         }
//         return repeatstr;
//     }
    
//     if (i%2==0) {
//         var new_row = white+black;
//         console.log(repeat(new_row, size/2));
//     } else {
//         console.log(repeat(row, size/2));
//     }
// }



// Method 3

var row=8, col=8; // mxn grid

for(let x=1; x<=row; x++){
    let temp='';
    
    if (x%2==0) {
        for(let y=1; y<=col; y++){
            if (y%2==0) {
                temp+=' '
            } else {
                temp+='#'
            }
        }
        console.log(temp);
    } else {
        for(let y=1; y<=col; y++){
            if (y%2==0) {
                temp+='#'
            } else {
                temp+=' '
            }
        }
        console.log(temp);
    }
}

