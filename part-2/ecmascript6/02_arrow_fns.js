// function sum(a, b) {
//     return a + b
// }
//
// function cube(a) {
//     return a ** 3
// }

const sum = (a, b) => a + b

const cube = a => a ** 3

console.log(sum(3, 4))
console.log(3)

setTimeout(() => console.log('Hello world!'), 1000)

//Context
function log() {
    console.log(this)
}

const arrowLog = () => console.log(this)

const person = {
    name: 'Ivan',
    age: 23,
    log: log,
    arrowLog: arrowLog,
    delayLog: function () {
        //Тут персон
        const self = this
        setTimeout(function () {
            //тут уже свой контекст глобал
            console.log(this.name + ' ' + this.age)
        }, 500)
    },
    delayLogSelf: function () {
        //Тут персон
        setTimeout(() => {
            //и тут персон. стрелочная функция не меняет контекст
            console.log(this.name + ' ' + this.age)
        }, 500)
    }
}

person.log()
console.log(global)
person.arrowLog()
person.delayLog()
person.delayLogSelf()