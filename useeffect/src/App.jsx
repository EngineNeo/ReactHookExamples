import React, { useState, useEffect } from 'react'

const App = () => {
  // Saving the inner width of the window
  const [windowWidth, setwindowWidth] = useState(window.innerWidth)

  // Function to set window width to the current window witdth
  const handleResize = () => {
    setwindowWidth(window.innerWidth)
  }

  // React hook to 
  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => { // Will remove the event listener after function is ran
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div>
      {windowWidth}
    </div>
  )
}

export default App;