import React from 'react'

function HeaderItem({name,Icon}) {
  return (
    <div className=' flex item-center gap-3 cursor-pointer text-[14px] font-semibold mt-3' >
    <Icon/ >
<h2>{name}</h2>

    </div>
  )
}

export default HeaderItem
