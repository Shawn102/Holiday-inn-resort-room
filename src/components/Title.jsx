import React from 'react'

const Title = ({title}) => {
  return (
    <div className='title'>
        <h2>{title}</h2>
        <div className="underline-title"></div>
    </div>
  )
}

export default Title;