const delay = ms => {
    return new Promise(resolve => setTimeout(() => resolve(), ms))
}

// delay(2000).then(() => console.log('Two sec'))

const url = 'https://jsonplaceholder.typicode.com/todos'

// function fetchTodos() {
//     console.log('Fetch todo started...')
//     return delay(2000).then(() =>
//         fetch(url).then(resp => resp.json())
//     )
// }
//
// fetchTodos()
//     .then(data => console.log('Data: ', data))
//     .catch(e => console.error(e))

async function fetchAsyncTodos() {
    try {
        console.log('Fetch todo started...')
        await delay(2000)
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
    } catch (e) {
        console.error(e)
    } finally {
        console.log('End')
    }
}

fetchAsyncTodos().then(() => console.log('It\'s promise!'))