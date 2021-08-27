function add(num1, num2 = 0) {
    //old option 1
    // num2 = num2 || 0;

    //old option 2
    // if (num2 == undefined) {
    //     num2 = 0;}


    const total = num1 + num2;
    return total;

}
const result = add(13, 4);//default place
console.log(result);

