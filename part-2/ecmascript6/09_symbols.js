//Почитать на https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Symbol

const symbol = Symbol('demo')
console.log(symbol)
const other = Symbol('demo')
console.log(other)

console.log(symbol === other)

const obj = {
    name: 'Ivan',
    demo: 'DEMO',
    [symbol]: 'meta'
}
console.log(obj)
console.log(obj[symbol])
console.log(obj[other])
for (let k in obj) {
    console.log(k)
}