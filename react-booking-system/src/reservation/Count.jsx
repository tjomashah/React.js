import React, { useState } from 'react'

export default function Count() {
    const [counter, setCounter] = useState(0)

    // useEffect(() => {
    //     document.title = counter
    // })


    return(
        <div>
            <div>{counter}</div>
            <button onClick={() => setCounter(counter + 1)} >Click</button>
        </div>
    )
} 