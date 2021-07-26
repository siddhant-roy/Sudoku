import React from 'react'
import './App.css'

const Instructions = ({ showInstr }) => {
  return (
    <div className="btnGroup">
      <button className="btn-2" onClick={showInstr}>
        <span>Instructions</span>
      </button>
    </div>
  )
}

export default Instructions
