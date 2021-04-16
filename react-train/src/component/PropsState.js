import React from 'react'

class PropState extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: 'data....',
    }
    this.updateState = this.updateState.bind(this)
  }

  updateState = (e) => {
    this.setState({
      data: e.target.value,
    })
  }
  render() {
    return (
      <>
        <Body propValue={this.state.data} propChange={this.updateState} />
      </>
    )
  }
}

class Body extends React.Component {
  render() {
    return (
      <>
        <div>
          <input
            value={this.props.propValue}
            onChange={this.props.propChange}
          />
        </div>
        <h3>{this.props.propValue}</h3>
      </>
    )
  }
}

export default PropState

// import React from 'react'

// class Prop extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       headerTitle: 'Hello world',
//       contentTitle: 'Meet you',
//     }
//   }
//   render() {
//     return (
//       <>
//         <Header headerTitle={this.state.headerTitle} />
//         <Content contentTitle={this.state.contentTitle} />
//       </>
//     )
//   }
// }

// class Header extends React.Component {
//   render() {
//     return (
//       <div>
//         <h2>{this.props.headerTitle}</h2>
//       </div>
//     )
//   }
// }

// class Content extends React.Component {
//   render() {
//     return (
//       <div>
//         <h2>{this.props.contentTitle}</h2>
//       </div>
//     )
//   }
// }

// export default Prop
