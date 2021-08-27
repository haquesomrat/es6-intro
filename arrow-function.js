//function declaration
function add(num1, num2) {
    // const sum = num1 + num2;
    return num1 + num2;
}
//function expression
const add2 = function add2(num1, num2) {
    // const sum = num1 + num2;
    return num1 + num2;
}
//fumnction expression(anonymous )
const add3 = function (num1, num2) {
    return num1 + num2;
}

//arrow function
const add4 = (num1, num2) => num1 + num2;


// document.getElementById('my-btn').onclick = function handleEvent(){

// }
const sum1 = add(11, 34);
const sum2 = add2(88, 65);
const sum3 = add3(48, 56);
const sum4 = add4(81, 35);
// console.log(sum1);
// console.log(sum2);
// console.log(sum3);
// console.log(sum4);
console.log(sum1, sum2, sum3, sum4);