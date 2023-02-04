// console.log('Start')
// console.log('Start2')
//
// function timeOutFn() {
//     console.log('Timeout 5 sec')
// }
//
// //Can without window
// window.setTimeout(() => {
//     console.log("Inside timeout after 2 seconds")
// }, 2000)
//
// setTimeout(timeOutFn, 5000)
//
// console.log('End')

console.log('Start')
// SetTimeout отправляет функцию в Web APIs, откуда ф-я попадает в CallBack Queue
// И только потом функция возвращается в Call Stack
//Штука называется Event Loop
setTimeout(() => {
    console.log('Timeout')
}, 0)

console.log('End')