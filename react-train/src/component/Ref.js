import React, { useRef, useState } from 'react'

function Ref() {
  const [data, setData] = useState({
    data: 'data...',
  })

  const updateData = (e) => {
    setData({
      data: e.target.value,
    })
  }

  const clear = useRef(null)
  const clearInput = () => {
    clear.current.value = ''
    clear.current.focus()
  }

  return (
    <div>
      <input ref={clear} name="data" value={data.data} onChange={updateData} />
      <button onClick={clearInput}>CLEAR</button>
      <h5>{data.data}</h5>
    </div>
  )
}

export default Ref

// import React from 'react'
// import ReactDOM from 'react-dom'

// class Ref extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       data: 'data...',
//     }
//     this.updateState = this.updateState.bind(this)
//     this.clearInput = this.clearInput.bind(this)
//   }
//   updateState = (e) => {
//     this.setState({
//       data: e.target.value,
//     })
//   }

//   clearInput() {
//     this.setState({ data: '' })
//     ReactDOM.findDOMNode(this.refs.myInput.focus())
//   }

//   render() {
//     return (
//       <div>
//         <input
//           ref="myInput"
//           onChange={this.updateState}
//           value={this.state.data}
//         />
//         <button onClick={this.clearInput}>CLEAR</button>
//       </div>
//     )
//   }
// }

// export default Ref
