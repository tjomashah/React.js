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
    let reader = new FileReader()
    reader.onload = (event) => {
      console.log(event.target.result)
    }
    reader.readAsText(file)
  }

  render() {
    return (
      <div>
        <input type="file" name="myFile" onChange={this.onChange} />
        {/* {this.state.file} */}
      </div>
    )
  }
}

export default Upload
