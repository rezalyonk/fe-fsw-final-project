import React from 'react'

const Button = ({link,text}) => {
  return (
    <a href= {link} className='btn'>{text}</a>
  )
}

export default Button