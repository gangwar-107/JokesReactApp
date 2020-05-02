import React from 'react'
import ReactDOM from 'react-dom'

/*  map returns a modified array
  const nums = [1,2,3,4,5,6,7,8,9,10]
  const doubled = nums.map((num)=>{
      return num*2
  })



*/

function Jokes(props){
     return (
        <div>
            <h3 style={{color:"Red"}}>Question: {props.question} </h3>
            <h3 style={{color:"Blue"}}>Answer: {props.punchLine}</h3>
        </div>
     )
}

export default Jokes