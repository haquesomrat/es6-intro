let balance = 1240; //You can not use constant when the number is variable
balance = 1340;   //You should use let
const userName = 'janpakhi';
const weTogether = 'ami' + userName;
console.log(weTogether);

const numbers = [34, 56, 70, 76, 44];
// numbers = [44, 68, 71];//not allowed to reassign 
//but you can pop and push
numbers.push(555);
numbers[1] = 333;

for (let i = 0; i < numbers.length; i++) {
    const number = [i];
    console.log(number);
}

const students = { name: 'mofij', roll: 44, job: "intern" };
students.name = 'mofazzol';//allowed
// students = { name: 'Mofazzol' } //not allowed
