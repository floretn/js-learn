const requestURL = 'https://jsonplaceholder.typicode.com/users'

// const xhr = new XMLHttpRequest()
// xhr.open('GET', requestURL)
// xhr.onload = () => {
//     console.log(JSON.parse(xhr.response))
// }
// xhr.responseType = 'json'
// xhr.onload = () => {
//     if (xhr.status >= 400) {
//         console.error(xhr.response)
//     } else {
//         console.log(xhr.response)
//     }
// }
// xhr.onerror = () => {
//     console.error(xhr.response)
// }
// xhr.send()

// function sendRequest(method, url, body = null) {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest()
//         xhr.open(method, url)
//         xhr.responseType = 'json'
//         xhr.setRequestHeader('Content-Type', 'application/json')
//         xhr.onload = () => {
//             if (xhr.status >= 400) {
//                 console.error(xhr.response)
//             } else {
//                 console.log(xhr.response)
//             }
//         }
//         xhr.onerror = () => {
//             console.error(xhr.response)
//         }
//         xhr.send(JSON.stringify(body))
//     })
// }

function sendRequest(method, url, body = null) {
    //Для GET-запроса можно указывать ТОЛЬКО url
    return fetch(url, {
        method: method,
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(resp => {
        if (resp.ok) {
            return resp.json() //Can be resp.text()
        }
        return resp.json().then(error => {
            const e = new Error('something wrong')
            e.data = error
            throw e
        })
    })
}

// sendRequest('GET', requestURL)
//     .then(data => console.log(data))
//     .catch(err => console.error(err))

sendRequest('POST', requestURL, {name: 'Ivan', age: 23})
    .then(data => console.log(data))
    .catch(err => console.error(err))