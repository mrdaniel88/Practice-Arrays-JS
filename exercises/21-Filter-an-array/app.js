let allNames = ["Romario", "Boby", "Roosevelt", "Emiliy", "Michael", "Greta", "Patricia", "Danzalee"];

//your code here
let resultingNames = allNames.filter(function(name) {
    if (name.charAt(0) == 'R') {
        return name;
    }
});
console.log(resultingNames);