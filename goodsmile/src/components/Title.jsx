import React from 'react'

const Title = ({title}) => {
  return (
    <div className="line-container">
        <hr className="line" />
        <span className="text">{title}</span>
        <hr className="line" />
    </div>
  )
}

export default Title
