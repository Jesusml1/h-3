/**
 * mediante el loop for agregar los valores
 * de las claves [{a:1},{b:2},{c:3},{d:4},{e:5}]
 * dentro del array result 
 * 
 * 
 * output => [1,2,3,4,5]
 */
let arr = [{ a: 1 }, { b: 2 }, { c: 3 }, { d: 4 }, { e: 5 }]
let result = []

for (let o of arr) {
    Object.entries(o).map((e) => result.push(e[1]))
}

//export result
module.exports = result