//function createCalcFun(n) {
//	return () => console.log(1000*n)
//	return function() {
//		console.log(1000*n)
//	}
//}

//const calc = createCalcFun(42)
//console.log(calc)
//calc()

//function createInc(i) {
//	return (num) => num + i
//	return function(num) {
//		return num + i
//	}
//}

//const addOne = createInc(1)
//console.log(addOne(15))

//const comUrl = function(domain) {	
//	return url => `https://${url}.${domain}`
//}

//console.log(comUrl('com')('google'))

//Доп. задача

const person1 = {name: 'Max', age: 22, job: 'manager'}
const person2 = {name: 'Ivan', age: 25, job: 'senior'}

function logPerson() {
	console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
}

//Моё решение (работает, какого чёрта)
//function bind(pers, func) {
//	return func.bind(pers)
//}

function bind(context, fn) {
	return args => fn.apply(context, args)
}

bind(person1, logPerson)()
bind(person2, logPerson)()

