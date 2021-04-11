import React from 'react'

class Upload extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fileData: []
    }
    this.onChange = this.onChange.bind(this);
  }
  
  onChange(event) {
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.onload = event => {
      this.setState({
        fileData: event.target.result,
      })
    };

    reader.readAsText(file);
  }
 
  render() {
    return (
      <div>
        <input className="form-control" type="file" onChange={this.onChange} /> 
        <div>{this.state.fileData}</div>
        {/* <table
          className="table table-bordered table-hover"
          style={{ width: 800, textAlign: 'center' }}
        >
          <tbody>
            {this.state.fileData.map((record, index) => {
              return (
                <tr>
                  {Object.keys(record).map((row, key) => {
                    return <td>{record[row]}</td>
                  })}
                </tr>
              )
            })}
          </tbody>
        </table> */}
      </div>
    )
  }
}

export default Upload;
