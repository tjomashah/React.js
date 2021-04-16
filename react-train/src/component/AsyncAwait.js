import React from 'react'

const delay = ms => {
    return new Promise(r => setTimeout(() => r(), ms))
}

const url = 'https://jsonplaceholder.typicode.com/todos'

//Async/await
async function AsyncTodo() {
    console.log('Fetch todo started...')
    await delay(2000)
    const response = await fetch(url)
    const data = await response.json()
    console.log('Data:', data)
}

AsyncTodo()

//Promises
function fetchTodos() {
    console.log('Fetch todo started...')
    return delay(2000)
        .then(() => {
            return fetch(url)
        })
        .then(response => response.json())
}

fetchTodos()
    .then(data => {
        console.log('Data:', data)
    })
    .catch(e => console.error(e))

export default AsyncTodo