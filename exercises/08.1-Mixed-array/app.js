let mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

//your code here
let type = [];
for(let i in mix) {
    type.push(typeof mix[i])
}
console.log(type)