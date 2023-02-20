const map = new Map([
    ['a', 1]
])

console.log(map)
map.set('b', 2).set(NaN, 'Number')
console.log(map)
//map.clear()
console.log(map.has(42))
map.delete('b')
console.log(map)
console.log(map.size)

console.log(map.keys())
console.log(map.values())
console.log(map.entries())

const set = new Set([1, 1, 2, 3, 5, 5, 8, 13, 21, 21])
console.log(set)
console.log(set.size)
console.log(set.add(34))
// set.clear()
set.delete(1)
console.log(set)

console.log(set.keys())
console.log(set.values())
console.log(set.entries())