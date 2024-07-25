import React, { useState } from 'react'

const Input = ({register,  type, name = "Text", onchange}) => {
    const [value, setValue] =  useState("")
  return (
    <input
    value={value}
    onChange={(e) => setValue(e.target.value)}
    type={type}
    {...register(`${name}`)}
  />
  )
}

export default Input