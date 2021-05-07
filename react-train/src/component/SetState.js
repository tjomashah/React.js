// import React, { useState } from 'react'

// function User() {
//   const [firstName, setFirstName] = useState()
//   const [lastName, setLastName] = useState()

//   handleCkickFirstName = (e) => {
//     setFirstName(e.target.value)
//   }

//   handleCkickLasttName = (e) => {
//     setLasttName(e.target.value)
//   }

//   return (
//     <div>
//       <input />
//       <input />
//       <h5>Your name is </h5>
//       <h5>Your surname is </h5>
//     </div>
//   )
// }

// export default User

import React, { useState, useEffect } from 'react'

function Form() {
  const [form, setForm] = useState({
    username: '',
    password: '',
  })

  const saveValues = (e) => {
    e.preventDefault()
    console.log(form.username, form.password)
  }

  const updateField = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  useEffect(() => {
    const file = JSON.stringify(form)
    localStorage.setItem('form', file)
  })

  return (
    <form onSubmit={saveValues}>
      <div>
        <label htmlFor="username">username</label>
      </div>
      <input
        id="username"
        name="username"
        value={form.username}
        onChange={updateField}
      />
      <div>
        <label htmlFor="password">password</label>
      </div>
      <input
        type="password"
        id="password"
        name="password"
        value={form.password}
        onChange={updateField}
      />
      <div>
        <button>Submit</button>
      </div>
    </form>
  )
}

export default Form

//=================counter Func ===============
// import React, { useState } from 'react'

// function Count() {
//   const [counter, setCounter] = useState(0)

//   const changeCounter = () => {
//     setCounter(counter + 1)
//   }

//   return (
//     <div>
//       <h3>You clicked {counter} times</h3>
//       <button onClick={changeCounter}>Click</button>
//     </div>
//   )
// }

// export default Count

//===========counter Class====================
// import React from 'react'

// class SetState extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             count: 0
//         }
//         this.handlclick = this.handlclick.bind(this)
//     }

//     handlclick() {
//         this.setState(prevState => {
//             return {
//                 count: prevState.count +1
//             }
//         })
//     }

//     render() {
//         return (
//             <div>
//                 <h2>{this.state.count}</h2>
//                 <button onClick={this.handlclick}>Click</button>
//                 {/* <ChildCOmponent count={this.state.count}/> */}
//             </div>
//         )
//     }
// }

// export default SetState
