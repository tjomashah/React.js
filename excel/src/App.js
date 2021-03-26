import React from 'react'

class App extends React.Component {
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
        fileData: event.target.result
      })
    };

    reader.readAsText(file);
  }
 
  render() {
    return (
      <div>
        <input className="form-control" type="file" onChange={this.onChange} /> 
        <div>{this.state.fileData}</div>
      </div>
    )
  }
}

export default App;
