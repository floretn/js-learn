function hello() {
	console.log('Hello', this)
}

const person = {
	name: 'Max',
	age: 25,
	sayHello: hello,
	//Меняем контекст. В случае, если там написать this или ничего - это будет глобальный объект window. Походу bind полностью переписывает контекст
	sayHelloWin: hello.bind(document),
	logInfo(job, phone) {
		console.group(`${this.name} info:`)
		console.log(`Name is ${this.name}`)
		console.log(`Age is ${this.age}`)
		console.log(`Job is ${job}`)
		console.log(`Phone is ${phone}`)
		console.groupEnd()
	}
}

const lena = {
	name: 'Lena',
	age: 23
}

//Надо вызывать функцию дополнительно
//person.logInfo.bind(lena)('manager', '11111111')
//const fnLenaInfoLog = person.logInfo.bind(lena)
//fnLenaInfoLog('manager', '11111111'))
//const fnLenaInfoLog = person.logInfo.bind(lena, 'manager', '11111111')
//fnLenaInfoLog()

//Вызов сразу
//person.logInfo.call(lena, 'manager', '11111111')
//Как call, но только аргументы в массиве
//person.logInfo.apply(lena, ['manager', '11111111'])

////////////////////////////////////////////////////////////

const arr = [1, 2, 3, 4, 5]

//function multBy(arr, n) {
//	return arr.map(i => i*n)
//}

//console.log(multBy(arr, 5))

Array.prototype.multBy = function(n) {
	return this.map(i => i*n)
}

console.log(arr.multBy(2))