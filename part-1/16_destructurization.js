// ===================================================================================================
// Arrays

function calculateVal(a, b) {
    return [
        a + b,
        a - b,
        a * b,
        a / b,
        // 1234,
        undefined
    ]
}

// console.log(calculateVal(42, 10))
// const result = calculateVal(42, 10)
// const sum = result[0]
// const sub = result[1]

// const [sum, sub] = calculateVal(42, 10)
// const [sum, sub, mult] = calculateVal(42, 10) // если mult не нужен - плохо
// console.log(sum, sub)
// const [sum,, mult, ...other] = calculateVal(42, 10)
// console.log(sum, mult, other)


// const [sum,, mult,, someValue = 'value is not found'] = calculateVal(42, 10) //Можно по умолчанию
// console.log(sum, mult, someValue)

// ===================================================================================================
// Objects

const person = {
    name: 'Ivan',
    age: 23,
    address: {
        city: 'Moscow',
        country: 'Russia'
    }
}

// const {name:firstName = 'Without name', age, address, car = 'Without Car', address:{city:homeTown, country}} = person
// console.log(firstName, age, address, car, homeTown, country)

// const {name:firstName = 'Without name', ...info} = person
// console.log(firstName, info)

function logPerson({name:firstName = 'Without name', age, address, car = 'Without Car', address:{city:homeTown, country}}) {
    console.log(firstName, age, address, car, homeTown, country)
}

logPerson(person)