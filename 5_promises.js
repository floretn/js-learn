// console.log('Req Data')

// Это плохой подход
// setTimeout(() => {
//     console.log('Preparing Data')
//
//     const backendData = {
//         server: 'aws',
//         port: 2000,
//         status: 'working'
//     }
//
//     setTimeout(() => {
//         backendData.modified = true
//         console.log('Data received', backendData)
//     }, 2000)
// }, 2000)

// const p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('Preparing Data')
//         const backendData = {
//             server: 'aws',
//             port: 2000,
//             status: 'working'
//         }
//         resolve(backendData)
//     }, 2000)
// })

// p.then((data) => {
//     console.log('Promise resolved', data)
// })

// p.then((data) => {
//     const p2 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             data.modified = true
//             resolve(data)
//         }, 2000)
//     })
//     p2.then(clientData => console.log('Client Data', clientData))
// })

// p.then((data) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             data.modified = true
//             resolve(data)
//         }, 2000)
//     })
// }).then(clientData => console.log('Client Data', clientData))

// p.then((data) => {
//     // throw Error('Error!')
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             data.modified = true
//             resolve(data)
//             // reject(data)
//         }, 2000)
//     })
// }).then(clientData => {
//     console.log('Client Data', clientData)
//     clientData.fromPromise = true
//     return clientData
// }).then(data => {console.log('Modified', data)})
//     .catch(err => console.error('Error:', err))
//     .finally(() => console.log('Finally'))

// console.log('End')


const sleep = ms => {
    return new Promise(resolve => setTimeout(() => resolve(), ms))
}

sleep(3000).then(() => console.log('sleep 3 sec'))

//Выполнение после выполнения всех
Promise.all([sleep(2000), sleep(6000)])
    .then(() => console.log('ALl promises'))
//Выполнение после самого первого
Promise.race([sleep(2000), sleep(6000)])
    .then(() => console.log('Race promises'))