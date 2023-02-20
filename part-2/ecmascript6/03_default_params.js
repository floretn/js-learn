//Можно присваивать дефолтные значения
const defaultB = 10
const getDefault = (c = 1) => c ** 2
// function compute(a = 10, b = a) {
//     return a + b
// }
// function compute(a = 10, b = defaultB) {
//     return a + b
// }
function compute(a = 10, b = getDefault(a)) {
    return a + b
}
console.log(compute())