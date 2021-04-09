import React from 'react'

class Upload extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      file: [],
    }

    this.onChange = this.onChange.bind(this)
  }

  onChange(event) {
    let file = event.target.files[0]
    console.log(file)
    let reader = new FileReader()
    reader.onload = function (event) {
      file = event.target.result
      //   console.log(file)
    }

    reader.readAsText(file)
  }

  render() {
    return (
      <div>
        <input type="file" name="myFile" onChange={this.onChange} />
        <div>{this.state.file}</div>
      </div>
    )
  }
}

export default Upload
