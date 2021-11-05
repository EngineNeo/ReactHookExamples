import React, { useState} from 'react'

const App = () => {
  const [count, setCount] = useState(4) //Use State can be seperated
  const [theme, setTheme] = useState('blue') //Into multiple hooks
  // const count = state.count; // Creates a variable count using the state
  // const theme = state.theme; // A theme variable using state in the array

  function deCount() {
      setCount(prevCount => prevCount - 1)
      setTheme('Green')
  }

  function inCount() {
    setCount(prevCount => prevCount + 1)
    setTheme('Red')
  }

  return (
    <>
      <button onClick={deCount}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={inCount}>+</button>
    </>
  )
}

export default App;