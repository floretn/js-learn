// const promise = new Promise((resolve, reject) => setTimeout(() => {
//     resolve('Success')
// }, 1000))
//
// promise.then(data => console.log(data))

const delay = ms => new Promise((resolve, reject) => {
    setTimeout(() => {
        // reject('Error!')
        resolve('Done!')
    }, ms)
})

// delay(1000)
//     .then(data => delay(500))
//     .then(data => console.log(data))
//     .catch(err => console.error('Error:', err))
//     .finally(() => console.log('finally'))

async function asyncDelay() {
    try {
        const data = await delay(2000)
        console.log(data)
    } catch (e) {
        console.error('Error: ', e)
    } finally {
        console.log('finally')
    }
}

// asyncDelay()

Promise.all([
    delay(200),
    delay(500),
    delay(2000)
]).then(data => console.log(data))

Promise.race([
    delay(200),
    delay(500),
    delay(2000)
]).then(data => console.log(data))