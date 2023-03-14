/**
* modificar los valores de las propiedades (name y role) del objeto result, 
* name -> capital,
* role -> upper
* 
* 
* output => {
    id:100,
    name:"Foo",
    role:"ADMIN"
}
*/
let result = {
    id:100,
    name:"foo",
    role:"admin"
};

function capitalize(str) {
    return str.split('').map((c, i) => i === 0 ? c.toUpperCase() : c).join('')
}

result.name = capitalize(result.name)
result.role = result.role.toUpperCase()
 
//export result
module.exports = result; 
