import React from 'react'
import Papa from 'papaparse'
import '../App.css'

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

class FileReader extends React.Component {
  constructor() {
    super()
    this.state = {
      csvfile: [],
      file: [],
      parse: [],
    }
    this.parsed = []
    this.updateData = this.updateData.bind(this)
  }

  handleChange = (event) => {
    this.setState({
      csvfile: event.target.files[0],
    })
  }

  importCSV = () => {
    const { csvfile } = this.state
    Papa.parse(csvfile, {
      complete: this.updateData,
      header: true,
    })
  }

  updateData(result) {
    let _this = this
    let data = result.data

    this.setState({ file: data })
    data.forEach((element) => {
      if (element.direction == 'outbound') {
        let d = new Date(element.startTime)
        _this.newExMonthBill(
          element.endpointName,
          monthNames[d.getMonth()],
          element.price,
        )
      }
    })
    let parse = []
    const extentions = Object.keys(this.parsed)

    let index = 1
    for (let i = 0; i < extentions.length; i++) {
      const currentExt = extentions[i]
      const currentExtMonths = this.parsed[currentExt]

      const months = Object.keys(this.parsed[currentExt])

      for (let j = 0; j < months.length; j++) {
        const currentMonth = months[j]
        const ext = currentExt // 666
        const month = currentMonth // January
        const price = currentExtMonths[month].toFixed(2) // 0.0585

        parse.push([index, ext, month, price])

        index++
      }
    }
    this.setState({ parse })
  }

  newExMonthBill(extansion, month, price) {
    if (this.parsed[extansion]) {
      if (this.parsed[extansion][month]) {
        this.parsed[extansion][month] =
          parseFloat(price) + this.parsed[extansion][month]
      } else {
        this.parsed[extansion][month] = parseFloat(price)
      }
    } else {
      this.parsed[extansion] = {}
      this.parsed[extansion][month] = parseFloat(price)
    }
  }

  parseJSon() {
    const tableHeader = [['№', 'extension', 'month', 'price']]
    let auxData = this.state.parse

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
    return (
      <div
        style={{
          width: '100%',
        }}
      >
        <div className="wrapper">
          <div>
            {/* input choose file */}
            <input
              className="wrapper-input form-control"
              type="file"
              ref={(input) => {
                this.filesInput = input
              }}
              name="file"
              placeholder={null}
              onChange={this.handleChange}
            />
          </div>
          {/* btn upload file */}
          <div>
            <button
              className="wrapper-btn btn btn-secondary"
              onClick={this.importCSV}
            >
              {' '}
              Upload File
            </button>
          </div>
          {/* btn export to .csv */}
          <div>
            <button
              className="wrapper-btn btn btn-dark"
              style={{
                marginLeft: 50,
              }}
              onClick={() => {
                this.parseJSon()
              }}
            >
              Export to '.csv'
            </button>
          </div>
        </div>
        {/* show data in the table */}
        <div className="wrapper-table">
          <table className="table table-bordered table-hover">
            <tbody>
              {this.state.parse.map((record) => {
                return (
                  <tr>
                    {Object.keys(record).map((row) => {
                      return <td>{record[row]}</td>
                    })}
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default FileReader
