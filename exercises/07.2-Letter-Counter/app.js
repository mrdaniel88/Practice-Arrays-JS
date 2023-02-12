let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};

// your code here
// var alphabet {
//     a = 0, b = 0, c = 0, d = 0, e = 0, f = 0,
//     g = 0, h = 0, i = 0, j = 0, k = 0, l = 0,
//     m = 0, n = 0, o = 0, p = 0, q = 0, r = 0,
//     s = 0, t = 0, u = 0, v = 0, w = 0, s = 0,
//     y = 0, z = 0
// }

for (let i in par) {
    let letter = par[i].toLowerCase();
    if (letter == " ") {
        continue;
    }
    else if (counts[letter] == undefined) {
        counts[letter] = 1;
    }
    else {
        counts[letter] = counts[letter] + 1;
    }
}
console.log(counts);

