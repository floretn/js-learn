const validator = {
    get(target, prop) {
        return prop in target ? target[prop] : `Поля ${prop} в объекте нет`
    },
    set(target, prop, value) {
        if (value.length > 2) {
            Reflect.set(target, prop, value)
        } else {
            console.log(`Длинна должна быть больше 2-х символов. Сейчас ${value.length}`)
            return true //?? почему без этого не работает - хз
        }
    }
}

const form = {
    login: 'test',
    pwd: '12345'
}

const formProxy = new Proxy(form, validator)
console.log(formProxy)
console.log(formProxy.login)
console.log(formProxy.pwd)
console.log(formProxy.username)

formProxy.pwd = '12'
console.log(formProxy.pwd)


function log(message) {
    console.log('[Log]:', message)
}

const proxy = new Proxy(log, {
    apply(target, thisArg, argArray) {
        if (argArray.length === 1) {
            Reflect.apply(target, thisArg, argArray)
        } else {
            console.log('Колисчество аргументов не совпадает')
        }
    }
})

proxy('Custom message')
proxy('Some', 'Message')