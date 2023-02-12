let people = ['juan','ana','michelle','daniella','stefany','lucy','barak', 'emilio'];

//your code below
var result = people.filter(deletePerson);

function deletePerson(name) {
    return name !== 'daniella' || name !== 'juan' || name !== 'emilio'
}

console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));

