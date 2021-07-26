import React from 'react'
import './App.css'

const StartButtons = ({ showGame }) => {
  return (
    <div className="btnGroup">
      <button className="btn-1" onClick={showGame}>
        <span>▷</span>
      </button>
    </div>
  )
}

export default StartButtons
