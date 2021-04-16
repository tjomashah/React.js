import './index.css';
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from './redux/actions/Action';

function App() {
  const counter = useSelector(state => state.counter)
  const isLoggedRed = useSelector(state => state.isLoggedRed)
  const dispatch = useDispatch()


  return (
    <div className="App">
      <h2 className="text-6xl mt-20 mb-8">Counter: {counter}</h2>
      <button className="bg-green-500 w-16 border border-green-500 rounded-md mr-8" 
      onClick={() => dispatch(increment())}>+</button>
      <button className="bg-red-500 w-16 border border-red-500 rounded-md" 
      onClick={() => dispatch(decrement())}>-</button>
      {isLoggedRed ? <h3>I dont see you</h3> : ''} 
    </div>
  );
}

export default App;
