const num1 = 40;
const num2 = 50;
let result;

// normal if else 
/*if( num1 > num2 ){
    result = num1 * 2;
}else{
    result = num1 + num2;
}
console.log(result);
*/

// convert ternary 
result = num1 > num2 ? num1 * 2 : num1 + num2;
console.log(result)
