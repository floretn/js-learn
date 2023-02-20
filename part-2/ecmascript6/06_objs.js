const cityField = 'city'
const job = 'fullStack'

const person = {
    age: 23,
    name: 'Ivan',
    'country-live': 'Russia',
    job,
    [cityField + Date.now()]: 'Moscow',
    print: () => 'Person',
    someFn: function () {
        console.log('Some FN')
    },
    toString() {
        return Object.keys(this)
            .filter(key => key !== 'toString')
            .map(key => this[key])
            .join(' ')
    }
}

// console.log(person.toString())
// console.log(person)

//Methods
const first = {a: 1}
const second = {b: 2}

console.log(Object.is(20, 20))
console.log(Object.assign(first, second))
// console.log(first)
// console.log(Object.assign({}, first, {c: 3}))
// console.log(first)

const obj = Object.assign({}, first, {c: 3})
console.log(obj)
console.log(Object.entries(obj))
console.log(Object.keys(obj))
console.log(Object.values(obj))
