const people = [
    {name: 'Ivan1', age: 21, budget: 400001},
    {name: 'Ivan2', age: 22, budget: 400002},
    {name: 'Ivan3', age: 23, budget: 400003},
    {name: 'Ivan4', age: 24, budget: 400004},
    {name: 'Ivan5', age: 25, budget: 400005},
    {name: 'Ivan6', age: 26, budget: 400006}
]

// forEach

// for (let person of people) {
//     person.age++
//     console.log(person)
// }
//
// people.forEach(person => {
//     person.age++
//     console.log(person)
// })

// map

// const ages = people.map(person => person.age++)
// ages.forEach(age => console.log(age))
//
// const peopleString = people.map(person => `{\n name: ${person.name},\n age: ${person.age}\n}`)
// peopleString.forEach(peopleString => console.log(peopleString))

// filter

// const filteredPeople = people.filter(person => person.age > 23)
// filteredPeople.forEach(person => console.log(person))

// reduce

// const totalBudget = people.reduce((total, person) => total + person.budget, 0)
// console.log(totalBudget)

// find

// const person = people.find(people => people.name === 'Ivan3' || people.name === 'Ivan4')
// console.log(person)

// findIndex

// const index = people.findIndex(people => people.name === 'Ivan3' || people.name === 'Ivan4')
// console.log(index)

// =============

console.log(people.filter(person => person.age > 22)
    .map(person => {return {
        info: `name: ${person.name} (${person.age})`,
        budget: Math.sqrt(person.budget)
    }})
    .reduce((totalBudget, person) => totalBudget + person.budget, 0))