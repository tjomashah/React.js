import React from 'react'
import Papa from 'papaparse'
import '../App.css'

/* const monthNames = [
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
] */
const monthNames = [
  'enero',
  'febrero',
  'marzo',
  'abril',
  'mayo',
  'junio',
  'julio',
  'agosto',
  'septiembre',
  'octubre',
  'noviembre',
  'diciembre',
]

class Upload extends React.Component {
  constructor() {
    super()
    this.state = {
      csvfile: [],
      file: [],
      parse: [],
    }
    this.parsed = []
    this.updateData = this.updateData.bind(this)
    this.exportToCSVButton = this.exportToCSVButton.bind(this)
    this.getHeader = this.getHeader.bind(this)
    this.getFooter = this.getFooter.bind(this)
    this.getProcessBtn = this.getProcessBtn.bind(this)
    this.getResetBtn = this.getResetBtn.bind(this)
    this.reset = this.reset.bind(this)
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
    const tableHeader = [['index', 'extension', 'month', 'total']]
    let auxData = this.state.parse

    for (let i = 0; i < tableHeader.length; i++) {
      auxData.unshift(tableHeader[i].join(','))
    }

    let csvString = auxData.join('%0A')

    let a = document.createElement('a')
    a.href = 'data:attachment/csv,' + csvString
    a.target = '_blank'
    a.download = `llamadas-${new Date().toDateString()}.csv`
    document.body.appendChild(a)
    a.click()
  }

  getHeader = () => {
    return (
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <a
          href="https://delinternet.com"
          target="_blank"
          className="navbar-brand ml-1"
        >
          <img
            src="./delinternet.svg"
            height="35"
            className="margin-left"
            alt="delinternet"
          />
        </a>
        <h3 className="app-name"> Calculadora de Extensión</h3>
      </nav>
    )
  }

  exportToCSVButton = () => {
    if (Object.keys(this.parsed).length > 0) {
      return (
        <button
          className="wrapper-exp-btn btn btn-dark export-btn"
          onClick={() => {
            this.parseJSon()
          }}
        >
          Exportar a csv
        </button>
      )
    }
    return <></>
  }

  getProcessBtn = () => {
    if (this.state.csvfile.length <= 0) {
      return <></>
    }
    return (
      <button
        className="wrapper-choose-btn btn btn-secondary"
        onClick={this.importCSV}
      >
        Proceso
      </button>
    )
  }

  getResetBtn = () => {
    if (this.state.csvfile.length <= 0) {
      return <></>
    }
    return (
      <button
        className="wrapper-choose-btn btn btn-warning btn-reset"
        onClick={this.reset}
      >
        Reiniciar
      </button>
    )
  }

  reset = () => {
    this.filesInput.value = ''
    this.parsed = []
    this.setState({
      csvfile: [],
      file: [],
      parse: [],
    })
  }

  getTable = () => {
    if (!this.state.parse || this.state.parse.length <= 0) {
      return <></>
    }
    return (
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">extensión</th>
            <th scope="col">mes</th>
            <th scope="col">precio total</th>
          </tr>
        </thead>
        <tbody>
          {this.state.parse.map((record, i) => {
            return (
              <tr key={i}>
                {Object.keys(record).map((row, i) => {
                  return <td key={i}>{record[row]}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }

  getFooter = () => {
    return (
      <footer className="c-footer fixed-bottom  pt-5 text-muted text-center text-small">
        <p className="mb-1">
          &copy; 2021 <a href="https://delinternet.com">Delinternet</a>:
          Internet Fibra Òptica, telefonia fixa i mòbil
        </p>
        <ul className="list-inline">
          <li className="list-inline-item">
            <a href="https://delinternet.com/legalitat">Legalitat</a>
          </li>
          <li className="list-inline-item">
            <a href="https://delinternet.com/privacitat">Privacitat</a>
          </li>
          <li className="list-inline-item">
            <a href="https://delinternet.com/atencio-usuari">Protecció dades</a>
          </li>
        </ul>
      </footer>
    )
  }

  render() {
    return (
      <div
        style={{
          width: '100%',
        }}
      >
        {this.getHeader()}
        <div className="main-container">
          <h4 className="text-header">
            Elija el archivo csv de llamadas para comenzar
          </h4>
          <div className="wrapper">
            <div>
              {/* input choose file */}
              <input
                className="wrapper-input form-control"
                type="file"
                placeholder={'Elija el archivo'}
                ref={(input) => {
                  this.filesInput = input
                }}
                name="file"
                onChange={this.handleChange}
              />
            </div>
            {/* btn upload file */}
            <div>{this.getProcessBtn()}</div>
            {/* btn export to .csv */}
            <div>
              {this.getResetBtn()}
              {this.exportToCSVButton()}
            </div>
          </div>
          {/* show data in the table */}
          <div className="wrapper-table">{this.getTable()}</div>
        </div>
        {this.getFooter()}
      </div>
    )
  }
}

export default Upload
