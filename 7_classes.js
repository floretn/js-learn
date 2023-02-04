// const animal = {
//     name: 'Animal',
//     age: 5,
//     hasTail: true
// }
//
// console.log(animal)

// class Animal {
//     static type = 'ANIMAL'
//
//     constructor(options) {
//         this.name = options.name
//         this.age = options.age
//         this.hasTail = options.hasTail
//     }
//
//     voice() {
//         console.log('I\'m Animal!')
//     }
//
//     someMethod() {
//         console.log('Something')
//     }
// }

// const animal = new Animal({
//     name: 'Animal',
//     age: 5,
//     hasTail: true
// })

// console.log(animal)
// animal.voice()
// console.log(Animal.type)

// class Cat extends Animal {
//     static type = 'Cat'
//
//     constructor(props) {
//         super(props)
//         this.color = props.color
//     }
//
//     voice() {
//         // super.voice()
//         console.log('Meow')
//     }
//
//     get peopleAge() {
//         return this.age * 7 + 7
//     }
//
//     set peopleAge(newAge) {
//         this.age = newAge
//     }
// }
//
// const cat = new Cat({
//     name: 'Cat',
//     age: 9,
//     hasTail: true,
//     color: 'black'
// })
//
// cat.voice()
// cat.someMethod()
// console.log(cat.color)
// cat.peopleAge = 10
// console.log(cat.peopleAge)



class Component {
    constructor(selector) {
        this.$el = document.querySelector(selector)
    }

    hide() {
        this.$el.style.display = 'none'
    }

    show () {
        this.$el.style.display = 'block'
    }
}

class Box extends Component {
    constructor(options) {
        super(options.selector)
        this.$el.style.width = this.$el.style.height = options.size + 'px'
        this.$el.style.background = options.color
    }
}

//Появится квадрат. Можно играть методами из компонента
const box1 = new Box ({
    selector: '#box1',
    size: 100,
    color: 'red'
})

const box2 = new Box ({
    selector: '#box2',
    size: 120,
    color: 'blue'
})

class Circle extends Box {
    constructor(options) {
        super(options)
        this.$el.style.borderRadius = '50%'
    }
}

const c = new Circle({
    selector: '#circle',
    size: 90,
    color: 'green'
})