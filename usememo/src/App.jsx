import React, { useState, useMemo, useEffect } from 'react'

const App = () => {
  const [number, setNumber] = useState(0)
  const [dark, setDark] = useState(false)
  const doubleNumber = useMemo(() => { // Runs function on arg change
    return slowFunction(number)
  }, [number]) //When number is changed function will run
  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? 'black' : 'white',
      color: dark ? 'white' : 'black'
    }
  }, [dark]) // When dark var is changed function is ran

  // Only works when theme is changed
  useEffect(() => {
    console.log('Theme Changed')
  }, [themeStyles])

  return (
    <>
      <input type="number" value={number} onChange={e => setNumber(parseInt
      (e.target.value))} />
      <button onClick={() => setDark(prevDark => !prevDark)}>Change Theme</button>
      <div style={themeStyles}>{doubleNumber}</div>
    </>
  )
}

// Slow function to run every render
function slowFunction(num) {
  for (let i=0; i<=1000000000; i++){}
  return num * 2
}

export default App;