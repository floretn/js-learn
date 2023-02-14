//Wrapper

const withDefaultValue = (target, defaultV = 0) => {
    return new Proxy(target, {
        get: (obj, prop) => (prop in obj) ? obj[prop] : defaultV
    })
}

const position = withDefaultValue({
        x: 24,
        y: 24
    },
    0
)

console.log(position)

//Hidden properties

const withHiddenProps = (target, prefix = '_') => {
    return new Proxy(target, {
        has: (obj, prop) => (prop in obj) && (!prop.startsWith(prefix)),
        ownKeys: obj => Reflect.ownKeys(obj).filter(p => !p.startsWith(prefix)),
        get: (obj, prop, receiver) => (prop in receiver) ? obj[prop] : void 0 //void 0 === undefined
    })
}

const data = withHiddenProps({
    name: 'Ivan',
    age: 23,
    _uid: '12345678909864'
})

//Optimization

const  userData = [
    {id: 11, name: 'Ivan1', age: 21, job: 'fewfwe1'},
    {id: 12, name: 'Ivan2', age: 22, job: 'fewfwe2'},
    {id: 13, name: 'Ivan3', age: 23, job: 'fewfwe3'}
]

// const index = {}
// userData.forEach(i => index[i.id] = i)

const IndexArray = new Proxy(Array, {
    construct(target, [args]) {
        console.log(args)
        const index = {}
        args.forEach(item => (index[item.id] = item))
        return new Proxy(new target(...args), {
            get(arr, prop) {
                switch (prop) {
                    case 'push' :
                        return item => {
                            index[item.id] = item
                            arr[prop].call(arr, item)
                        }
                    case 'findById' : return id => index[id]
                    default:
                        return arr[prop]
                }
            }
        })
    }
})

const users = new IndexArray(userData)


