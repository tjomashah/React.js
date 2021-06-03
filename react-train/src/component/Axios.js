import axios from 'axios'
import React, { useState, useEffect } from 'react'

function Axios() {
  const [data, setData] = useState(null)
  const [fetchData, setFetchData] = useState(false)

  useEffect(() => {
    if (fetchData) {
      axios
        .get('https://jsonplaceholder.typicode.com/todos/1')
        .then((res) => setData(res.data.title))
    }
  }, [fetchData])

  return (
    <div>
      <h1>{data}</h1>
      <button onClick={() => setFetchData(true)}>Fetch Data</button>
    </div>
  )
}

export default Axios
