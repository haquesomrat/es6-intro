const numbers = [24, 45, 90, 54, 38];
// console.log(numbers);
// console.log(...numbers);

const max = Math.max(34, 39, 37);
const maxInArray = Math.max(...numbers);

// console.log(max, maxInArray);

const numbers2 = [34, ...numbers, 75];  //two dimensional array
numbers.push(66);
console.log(numbers);
console.log(numbers2);

