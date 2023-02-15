const myNumber = 42

//window.localStorage
//Работает ТОЛЬКО со строками
localStorage.setItem('num', myNumber.toString())
console.log(localStorage.getItem('num'))

localStorage.removeItem('num')
console.log(localStorage.getItem('num'))

localStorage.setItem('num', myNumber.toString())
localStorage.clear()

const obj = {
    name: 'Ivan',
    age: 23
}

// localStorage.setItem('person', obj) //[object Object]
localStorage.setItem('person', JSON.stringify(obj))
console.log(localStorage.getItem('person'))

const raw = localStorage.getItem('person')
// raw.name = 'Name' //it does not work because raw is string
const person = JSON.parse(raw)
person.name = "Name"
console.log(person)


window.addEventListener('storage', event => {
    console.log(event)
})
//И теперь можем добавлять в разных вкладках инфу в сторалд и получать в других ивент

// window.onstorage = () => {}
