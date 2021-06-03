// import axios from 'axios'
import React from 'react'
// import { CSVLink, CSVDownload } from 'react-csv'
// import '../files/calls.csv'
import file from '../files/res.json'

// const fetchData = (path, callback) => {
//   axios
//     .get(path)
//     .then(({ data }) => callback(data))
//     .catch((err) => console.log(err))
// }

class Converter extends React.Component {
  constructor() {
    super()
    this.state = {

      data: [],
    }
  }

  componentDidMount() {
    let data = []

    const extentions = Object.keys(file)

    let index = 1

    for (let i = 0; i < extentions.length; i++) {
      const currentExt = extentions[i]
      const currentExtMonths = file[currentExt]

      const months = Object.keys(file[currentExt])

      // console.log(months);

      for (let j = 0; j < months.length; j++) {
        const currentMonth = months[j]

        const ext = currentExt // 666
        const month = currentMonth // January
        const price = currentExtMonths[month].toFixed(2) // 0.0585

        // TODO do something

        data.push([index, ext, month, price])

        index++
      }
    }

    this.setState({ data })
  }

  parseJSon() {
    const tableHeader = [['№', 'extension', 'month', 'price']]
    let auxData = this.state.data

    for (let i = 0; i < tableHeader.length; i++) {
      auxData.unshift(tableHeader[i].join(','))
    }

    let csvString = auxData.join('%0A')

    let a = document.createElement('a')
    a.href = 'data:attachment/csv,' + csvString
    a.target = '_blank'
    a.download = 'calls.csv'
    document.body.appendChild(a)
    a.click()
  }

  render() {
    //console.log(this.state.data) //log

    return (
      <div>
        <button
          className="btn btn-dark"
          style={{ margin: '0px 0px 15px 15px' }}
          onClick={() => {
            this.parseJSon()
          }}
        >
          Export
        </button>

        <table
          className="table table-bordered table-hover"
          style={{ width: 800, textAlign: 'center' }}
        >
          <tbody>
            {this.state.data.map((record, index) => {
              return (
                <tr>
                  {Object.keys(record).map((row, key) => {
                    return <td>{record[row]}</td>
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Converter
