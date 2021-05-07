import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'

function App() {
  const content = useSelector((state) => state)
  const dispatch = useDispatch()

  function getData() {
    return (dispatch) => {
      axios.get('data.json').then((res) =>
        dispatch({
          type: 'FETCH_DATA',
          data: res.data,
        }),
      )
    }
  }

  const dataValues = Object.values(content.data)

  useEffect(() => {
    dispatch(getData())
  }, [])

  return (
    <table className="table table-bordered table-hover">
      <thead>
        <tr>
          <th>Client</th>
          <th>Invoice Code</th>
          <th>isPaid</th>
          <th>isCutted</th>

          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {dataValues.map((item, i) => {
          return (
            <tr key={i}>
              <td>{item.client}</td>
              <td>{item.code}</td>
              <td>{item.isPaid}</td>
              <td>{item.isCutted}</td>
              <td>{item.action}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default App

//===========================================

// import React from 'react'
// import FetchedPosts from './components/FetchedPosts'
// import PostForm from './components/PostForm'
// import Posts from './components/Posts'

// function App() {
//     return (
//         <div className="container pt-3">
//             <div className="row">
//                 <div className="col">
//                     <PostForm />
//                 </div>
//             </div>
//             <div className="row">
//                 <div className="col">
//                     <h2>Sync Posts</h2>
//                     <Posts posts={[]} />
//                 </div>
//                 <div className="col">
//                 <h2>ASync Posts</h2>
//                     <FetchedPosts />
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default App

//====================================================

// import React from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { increment, decrement } from './actions'

// function App() {
//     const counter = useSelector(state => state.counter);
//     const isLogged = useSelector(state => state.isLogged);
//     const dispatch = useDispatch()

//   return (
//     <div className="App">
//       <h1>Counter {counter}</h1>
//       <button onClick={() => dispatch(increment(5))}>+</button>
//       <button onClick={() => dispatch(decrement())}>-</button>
//       {isLogged ? <h3>I don't see you!</h3> : ''}
//     </div>
//   );
// }

// export default App;
