import React from 'react'

const Button = ({customClass, onlick, Text, disable}) => {
  return (
    <button className={`button ${customClass}`} onClick={onlick} disabled={disable}>{Text}</button>
  )
}

export default Button