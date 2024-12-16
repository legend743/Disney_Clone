import React from 'react'

function HeaderItem({name,Icon}) {
  return (
    <div className='header-item fl' >
      {Icon && <Icon />} {/* Render the icon if it exists */}
      <span>{name}</span> {/* Display the name */}
    </div>
  )
}

export default HeaderItem
