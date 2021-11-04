import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(4)

  function deCount() {
    setCount(prevCount => prevCount - 1)
  }

  function inCount() {
    setCount(prevCount => prevCount + 1)
  }

  return (
    <>
      <button onClick={deCount}>-</button>
      <span>{count}</span>
      <button onClick={inCount}>+</button>
    </>
  )
}

export default App;