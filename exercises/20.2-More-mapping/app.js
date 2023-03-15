let myNumbers = [23, 234, 345, 4356234, 243, 43, 56, 2];

// your code here
let newArray = myNumbers.map(myFunction)

function myFunction(number) {
    return number * 3;
}

console.log(newArray);