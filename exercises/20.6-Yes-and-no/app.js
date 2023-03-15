let theBools = [0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];

//your code here
let rename = theBools.map(function(values) {
    if (values == 1) {
        values = 'wiki'
    } else {
        values = 'woko'
    }

    return values;
})

console.log(rename)