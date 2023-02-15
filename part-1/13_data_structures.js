//MAP

const obj = {
    name: 'Ivan',
    age: 23,
    job: 'coder'
}

const entries = [
    ['name', 'Ivan'],
    ['age', 23],
    ['job', 'coder']
]

// console.log(Object.entries(obj))
// console.log(Object.fromEntries(entries))

const map = new Map(entries)

// map.set('name', 'Max')
// console.log(map)

// console.log(map.get('job'))
// map.set('newField', 42)
//     .set(obj, 'Value of obj')
//     .set(NaN, 'Nan')
//     .set(undefined, 'undefined')
// console.log(map)
// map.delete(undefined)
// console.log(map.has(undefined));
// console.log(map.get(obj))
// map.clear()
// console.log(map.size);

// for (let entry of map.entries()) {
//     console.log(entry);
// }

// for (let [key, entry] of map.entries()) {
//     console.log(key, entry);
// }

// for (let val of map.values()) {
//     console.log(val);
// }

// for (let key of map.keys()) {
//     console.log(key);
// }

// map.forEach((val, key, m) => {
//     console.log(key, val, m)
// })

// const arr = [...map]
// console.log(arr)
// const arr = Array.from(map)
// console.log(arr)

// const mapObj = Object.fromEntries(map.entries())
// console.log(mapObj);
//
// const users = [
//     {name: 'Ivan'},
//     {name: 'Max'}
// ]
//
// const visit = new Map()
// visit.set(users[0], 100)
//     .set(users[1], 12343)
//
// function lastVisit(user) {
//     return visit.get(user)
// }
//
// console.log(lastVisit(users[0]))

//======================================================================================================================
//SET

const set = new Set([1, 3, 4, 3, 3, 2, 4, 5])
set.add(10).add(10)

// console.log(set);
// console.log(set.has(11))
// console.log(set.size)
// set.delete(1)
// console.log(set)
// set.clear()
// console.log(set)

// console.log(set.values())
// console.log(set.keys())
// console.log(set.entries())
//
// for (let val of set) {
//     console.log(val)
// }
//
// function uniqValues(arr) {
//     return [...new Set(arr)] //Array.from(set)
// }
//
// console.log(uniqValues([1, 2, 3, 4, 5, 6, 1, 2, 3, 6]))

//======================================================================================================================
//WEEK MAP

let willNull = {name: 'weekMap'}
// const arr = [obj]
// willNull = null
// console.log(willNull)
// console.log(arr[0])
//Но если такое повторить с ключом мапы, то значение никогда не удалится....

const weakMap = new WeakMap([
    [willNull, 'obj data']
])
//get set delete has
// console.log(weakMap.get(willNull))
//вывод всегда <items unknown> (такая реализвация, объекты удаляются рандомным образом)
// console.log(weakMap)
// willNull = null
// console.log(weakMap.get(willNull))
// console.log(weakMap)

//size не работает (НЕТ ТАКОГО СВОЙСТВА)!!!
// console.log(weekMap.size)

// const cache = new WeakMap()
// function cacheUser(user) {
//     if (!cache.has(user)) {
//         cache.set(user, Date.now())
//     }
//     return cache.get(user)
// }
//
// let user = {name: 'User'}
// let ivan = {name: 'Ivan'}
//
// console.log(cacheUser(user))
// console.log(cacheUser(ivan))
// ivan = null
// console.log(cache.has(ivan))

//======================================================================================================================
//WEEK SET

const users = [
    {name: 'Ivan'},
    {name: 'Max'}
]

const visits = new WeakSet()

visits.add(users[0]).add(users[1])

console.log(visits.has(users[0]))
console.log(visits.has(users[1]))
users.splice(1, 1) //удаляет по индексу количество
console.log(visits.has(users[1]))
