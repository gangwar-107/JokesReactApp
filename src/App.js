import React from 'react';
import ReactDOM from 'react-dom'
import Jokes from './jokes'
import jokesData from './jokesData'

function MyApp(){

  const jokeComponents = jokesData.map(joke => <Jokes key = {joke.id} question = {joke.question} punchLine = {joke.punchLine} />)
    return (
      <div>
          {jokeComponents}
      </div>
    )
}


export default MyApp