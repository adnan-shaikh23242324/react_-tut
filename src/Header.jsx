import React from 'react'

function header(props) {
  console.log(props)
  return (
    <div>Hello {props.name}</div>
  )
}

export default header