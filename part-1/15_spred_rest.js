const citiesRussia = ['Moscow', 'Arkhangelsk', 'Kazan', 'Tambov']
const citiesEurope = ['Berlin', 'London', 'Parish']

const citiesRussiaWithPopulation = {
    'Moscow': 5000000,
    'Arkhangelsk': 500000,
    'Kazan': 1000000,
    'Tambov': 700000
}

const citiesEuropeWithPopulation = {
    Moscow: 3500000,
    'Berlin': 2000000,
    'London': 3000000,
    'Parish': 5000000
}

// =================================================================================================================
//Spread

// console.log(...citiesRussia)
// console.log(...citiesEurope)
//
// const allCities = [...citiesRussia, 'Washington', ...citiesEurope] //copy array
// const allCities1 = citiesEurope.concat(citiesRussia) //analog
// console.log(allCities);

// console.log(...citiesRussiaWithPopulation) //error
// console.log({...citiesRussiaWithPopulation}) //copy objs
// console.log({...citiesRussiaWithPopulation, ...citiesEuropeWithPopulation})
// console.log({...citiesEuropeWithPopulation, ...citiesRussiaWithPopulation})

const numbers = [5, 36, 1343, 3253, 132]
// console.log(Math.max(numbers)) //error
// console.log(Math.max(...numbers))
// console.log(Math.max.apply(null, numbers)) //хитро сделать также:)))

// const divs = document.querySelectorAll('div')
// console.log(divs) //NodeList (not array...)
// const nodes = [...divs]
// console.log(nodes)

// =================================================================================================================
//Rest

function sumSpread(a,b) {
    return a + b
}

console.log(sumSpread(...numbers)) //Только первые 2, это Spread!!!

//А это уже Rest!!!
function sum(...args) {
    return args.reduce((total, n) => total + n)
}
console.log(sum(...numbers))

//Простое присвоение из массива
// const a = numbers[0]
// const b = numbers[1]
//Rest
const [a, b, ...other] = numbers
console.log(a, b, other)

const person = {
    name: 'Ivan',
    age: 23,
    city: 'Moscow',
    country: 'Russia'
}
//Rest
const {name, age, ...address} = person
console.log(name, age, address)