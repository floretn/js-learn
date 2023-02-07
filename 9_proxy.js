// Objects
const person = {
    name: 'Ivan',
    age: 23,
    job: 'Javer'
}

const op = new Proxy(person, {
    get(target, prop) {
        // console.log('Target:', target)
        // console.log('Prop:', prop)
        if (!(prop in target))
            return prop.split('_').map(p => target[p]).join(' ')
        return target[prop]
    },
    set(target, prop, value) {
        if (prop in target) {
            target[prop] = value
        } else {
            throw new Error(`No ${prop} field in ${target}`)
        }
    },
    has(target, prop) {
        // return prop in target
        // return ['age', 'name', 'job'].includes(prop)
        return ['age', 'job'].includes(prop)
    },
    deleteProperty(target, prop) {
        console.log(`Deleting ${prop} from ${target}`)
        delete target[prop]
    }
})

//Functions

const log = text => `Log: ${text}`

const fp = new Proxy(log, {
    apply(target, thisContext, args) {
        console.log(`Calling fn ${target} for 
            ${thisContext} with parameters ${args}`)
        return target.apply(thisContext, args).toUpperCase()
    }
})

//Classes

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

const PersonProxy = new Proxy(Person, {
    construct(target, args) {
        console.log(`Construct: ${target} with parameters ${args}`)
        // return new target(... args)
        return new Proxy(new target(... args), {
            get(targetT, prop) {
                console.log(`Getting property ${prop}`)
                return targetT[prop]
            }
        })
    }
})


