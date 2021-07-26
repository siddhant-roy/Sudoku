import React from 'react'

/**
 * React component for the Header Section.
 */
export const Header = (props) => {
  return (
    <header className="header">
      <h1 className="headoo">S u d o k u</h1>
      <h2 onClick={props.onClick}>New Game</h2>
    </header>
  )
}
