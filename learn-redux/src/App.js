import React from 'react'
import FetchedPosts from './components/FetchedPosts'
import PostForm from './components/PostForm'
import Posts from './components/Posts'

function App() {
    return (
        <div className="container pt-3">
            <div className="row">
                <div className="col">
                    <PostForm />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h2>Sync Posts</h2>
                    <Posts posts={[]} />
                </div>
                <div className="col">
                <h2>ASync Posts</h2>
                    <FetchedPosts />
                </div>
            </div>
        </div>
    );
}

export default App


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