//function hello(name) {
//   return function(surname) {
//     alert (`Hello, ${name} ${surname}!`)
//   }
//}
//hello('Ivan')('Sofronov')


Object.prototype.sayHello = function() {
	alert('Hello')
}

const person = { //new Object({code})
	name: 'Max',
	age: 25,
	greet() {
		console.log('Greet!')
	}
}

const lena = Object.create(person)
lena.name = 'Lena' //name есть и у Лены и у персона (макс)

// const str = 'String'
// const str = new String('string')


