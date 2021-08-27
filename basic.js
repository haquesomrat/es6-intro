//variable
var deposit = 500;

// condition(getter than)
if (deposit > 400) {

}
//condition(less than)
else if (deposit < 200) {

}
//condition(is equals to)
else if (deposit == 600) {

}
//condition(is not equals to)
else if (deposit != 500) {

}
//condition(getter than or equals to)
else if (deposit >= 700) {

}
//condition(less than or equals to)
if (deposit <= 100) {

}


//array
const numbers = [45, 50, 70, 44, 78, 80];
const numberCount = numbers.length; //to see the array length
numbers.pop(45);  //to remove anyone number
numbers.push(111);   // to add a new number
numbers[2] = 55;  //to change selected index number

//check whether 9  included inn the array
if (numbers.indexOf(9) != -1) {  // != -1 means this number is not available index

}

//another way
if (numbers.includes(9)) {

}


//LOOps
//1.while loop
//2.for loop
for (const number of numbers) {  //for of

}

//function
function fullName(first, second) {
    const name = first + " " + second;
}
const person = fullName('Rahim', 'Ali');

//object
const bottle = { color: "yellow", contain: "water", price: "5$" };

