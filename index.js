import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import './style.css'

function Counter(){
  const [count, setCount] = useState(0)

  function increment(){
    setCount(count + 1)
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
    </>
  )
}

const el = <Counter/>
ReactDOM.render(el, document.getElementById('root'))