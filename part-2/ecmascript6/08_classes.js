class Person {
    type = 'human'
    constructor(name) {
        this._name = name
    }
    get name() {
        return this._name
    }
    set name(name) {
        this._name = name
    }
    greet() {
        console.log(`${this._name} say hello!`)
    }
}

const max = new Person('Max')
console.log(max)
console.log(max.type)
max.greet()

console.log(max.__proto__ === Person.prototype)

class Programmer extends Person {
    constructor(name, job) {
        super(name)
        this._job = job
    }
    get job() {
        return this._job.toUpperCase()
    }
    set job(job) {
        if (job.length < 2) {
            throw Error('Validation failed')
        }
        this._job = job
    }
    greet() {
        super.greet()
        console.log(`${this.name} is ${this._job} and say hello!`)
    }
}

const fullStack = new Programmer('Ivan', 'fullStack')
console.log(fullStack)
fullStack.greet()

console.log(fullStack.job)
fullStack.job = 'backend'
// fullStack.job = 'r'
console.log(fullStack.job)
console.log(fullStack.name)

//Static
class Util {
    static average(...args) {
        return args.reduce((acc, i) => acc + i, 0) / args.length
    }
}

const result = Util.average(1, 1, 2, 3, 5, 8, 13)
console.log(result)