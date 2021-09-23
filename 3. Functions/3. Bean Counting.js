// Bean counting

// You can get the Nth character, or letter, from a string by writing "string"[N]. The returned value will be a string containing only one character (for example, "b"). The first character has position 0, which causes the last one to be found at position string.length - 1. In other words, a two-character string has length 2, and its characters have positions 0 and 1.

// Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters there are in the string.

// Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function.


// Method 1
// function countBs(input,char) {
//     let count = 0;

//     if (typeof input === 'string') {
        
//         for(let i=0; i<=input.length-1; i++){
//             if (input[i]==char) {
//                 count++;
//             }
//         }
//         return console.log(count);
        
//     }
//     else{
//         console.log('wrong Input. Try typing in " ".');
//     }
// }
// countBs('yodaaa', 'a');



// Method 2
function countBs(input,char) {
    let count = 0;

    if (typeof input === 'string') {
        
        function sumNum(input){
                if (input[0]==char) {
                    count++;
                    sumNum(input.slice(1))

                } else if(input==''){
                    return console.log(count);
                }
                else{
                    sumNum(input.slice(1))
                }
        }
        sumNum(input);
        
    }
    else{
        console.log('wrong Input. Try typing in " ".');
    }
}
countBs('XxXx', 'X');