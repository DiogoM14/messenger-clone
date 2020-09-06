import React from 'react'

export default function index(props) {
  return (
    <div>
      <h2>{props.username}: {props.text}</h2>
    </div>
  )
}
