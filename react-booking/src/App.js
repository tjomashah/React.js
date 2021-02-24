import React from 'react';
import Context from '../src/components/context';
import Booking from '../src/components/Booking';


function App() {
    return (
      <Context.Provider>
      <div >
        <h2 style={{fontSize: '40px', marginLeft: '30px'}}>Hotel Booking</h2>
        <Booking />
      </div>
      </Context.Provider>
    )
  }

export default App;
