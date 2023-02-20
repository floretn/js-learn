//Rest
function average(/*arr - Либо так, либо с arguments*/) {
    return Array.from(arguments).reduce((acc, i) => acc + i, 0) / arguments.length
}

function averageRest(...arr) {
    return arr.reduce((acc, i) => acc + i, 0) / arr.length
}

console.log(average(10, 20, 30, 40, 50))

//Spread
const array = [1, 2, 3, 5, 8, 13, 21]
console.log(...array)
console.log(Math.max(...array))
console.log(Math.min(...array))
//Тоже самое
console.log(Math.max.apply(null, array))

const fib = [1, ...array]
console.log(...fib)

//Destructing

// const a = array[0]
// const b = array[1]

const [a,, b, ...c] = array

console.log(a, b, c)

//Object

const address = {
    country: 'Russia',
    city: 'Moscow',
    street: 'Lenina',
    concat: function () {
        return `${this.country}, ${this.city}, ${this.street}`
    }
}

const {city: town, country = 'UK', street, concat} = address

// console.log(concat())
console.log(concat.call(address))

const {city, ...rest} = address

console.log(city, rest)

const newAddress = {...address, street: 'Tulskaya', code: 123}
console.log(newAddress)