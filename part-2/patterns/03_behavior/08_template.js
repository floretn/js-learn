class Employee {
    constructor(name, salary) {
        this.name = name
        this.salary = salary
    }

    responsibilities() {}

    work() {
        return `${this.name} выполняет ${this.responsibilities()}`
    }

    getPaid() {
        return `${this.name} имеет зп ${this.salary}`
    }
}

class Developer extends Employee {
    constructor(name, salary) {
        super(name, salary)
    }

    responsibilities() {
        return 'разработку софта'
    }
}

class Manager extends Employee {
    constructor(name, salary) {
        super(name, salary)
    }

    responsibilities() {
        return 'управление инопланетянами'
    }
}

const dev = new Developer('Иван', 126500)
const manager = new Manager('Варвара', 500000)

console.log(dev.work())
console.log(dev.getPaid())
console.log(manager.work())
console.log(manager.getPaid())