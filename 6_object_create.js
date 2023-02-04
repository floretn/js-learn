//Первый - прототип, второй - сам персон
const person = Object.create({
    calculateAge() {
        console.log('Age: ', new Date().getFullYear() - this.birthYear)
    }
}, {
    name: {
        value: 'Ivan',
        //Чтобы было видно при переборе ключей
        enumerable: true,
        //Ну тут и так понятно
        writable: true,
        //Что можем удалять ключ
        configurable: true
    },
    birthYear: {
        value: 1999,
        enumerable: false,
        writable: false,
        configurable: false
    },
    age: {
        get() {
            //Можно обратиться просто как person.age
            return new Date().getFullYear() - this.birthYear
        },
        set(v) {
            document.body.style.background = 'red'
            console.log('new age', v)
        }
    }
})

// console.log(person)

// const person = {
//     name: 'Ivan',
//     birthYear: 1999
// }

person.name = 'Maxim'

for (let key in person) {
    //Без этой проверки выведется функция calculateAge из прототипа
    if (person.hasOwnProperty(key)) {
        console.log('Key', key, person[key])
    }
}

// delete person.name
// delete person.birthYear
// console.log(person)

console.log(person.age)

person.age = 100

console.log(person.age)

person.calculateAge()