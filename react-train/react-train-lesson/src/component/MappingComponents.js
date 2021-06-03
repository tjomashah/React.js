import React from 'react'
import Data from './Data'
import Joke from './Joke'


function MappingComponents() {
    const jokesData = Data.map(joke => <Joke key={joke.id} question={joke.question} answer={joke.answer} />)
  return (
        <div>
          {jokesData}
        </div>
  )
}

export default MappingComponents