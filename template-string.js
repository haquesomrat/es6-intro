const love = 'Anika Akter Asha';
const encore = "srotoshini";
const kobita = `kobita tumi shopno charini`;
const multiLine = 'this is my first line. \n' +  //  \n= line break
    'this is my second line. \n' +
    'this is my third line. \n' +
    'this is my fourth line. \n';
// console.log(multiLine);

const multiLineNew = `this is first line
this is second line
this is third line
this is fourth line.`;
// console.log(multiLineNew);

const friendCount = 5;
const oldHeader = '<h3 class="friend-name"> Friend-5</h3> ';
const oldHeader2 = '<h3 class="friend-name"> Friend-' + friendCount + '</h3> ';
const new1 = `<h3 class="friend-name"> Friend-${friendCount}</h3>`;

// console.log(new1);

const first = 'mamun';
const second = 'chowdhury';
const fullOld = first + " " + second;
const fullNew = `This person name is: ${first} ${second}`;
console.log(fullNew);