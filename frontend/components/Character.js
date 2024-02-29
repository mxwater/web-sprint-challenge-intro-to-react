import React, { useState } from 'react'

function Character({char}) { // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not
  // ❗ Create a "toggle" click handler to show or remove the homeworld

  const [showHomeworld, setShowHomeworld] = useState(false)

  const toggleHomeworld = () => {
    setShowHomeworld(!showHomeworld)
  }

  return (
    <div onClick={toggleHomeworld} className='character-card'>
      <h3  className='character-name'>{char.name}</h3>
      {showHomeworld && <p>Planet: <span className='character-planet'>{char.homeworld.name}</span> </p>}
    
      {/* Use the same markup with the same attributes as in the mock */}
    </div>
  )
}

export default Character
