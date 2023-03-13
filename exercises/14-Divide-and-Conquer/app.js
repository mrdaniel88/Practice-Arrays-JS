let list_of_numbers = [4, 80, 85, 59, 37,25, 5, 64, 66,	81,20, 64, 41, 22, 76,76, 55, 96, 2, 68];

// your code here
function mergeTwoList(arr) {
    let odd = [];
    let even = [];
    for (let i in arr) {
        if (arr[i] % 2 != 0) {
            odd.push(arr[i]);
        }
        else if (arr[i] % 2 == 0) {
            even.push(arr[i]);
        }
    }
    let mergeResult = [].concat(odd, even);
    return mergeResult;
}

console.log(mergeTwoList([1,2,33,10,20,4]))
