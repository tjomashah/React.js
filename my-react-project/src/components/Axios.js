import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Axios() {
  const [fetchData, setFetchData] = useState([])
  const getFetch = async () => {
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/todos?_limit=5',
    )

    setFetchData(data)
  }

  useEffect(() => {
    setTimeout(() => {
      getFetch()
    }, 1500)
  }, [])

  return (
    <>
      {fetchData.length > 0 ? (
        <div style={{ marginTop: '5vw' }}>
          <h6 style={{ fontStyle: 'italic' }}>Our response</h6>
          {fetchData.map((item, i) => (
            <table className="table table-striped" key={i}>
              <tbody>
                <tr>
                  <td>{item.title}</td>
                </tr>
              </tbody>
            </table>
          ))}
        </div>
      ) : (
        <div className="spinner-border text-danger" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
    </>
  )
}

export default Axios
