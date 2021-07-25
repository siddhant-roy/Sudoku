import React from 'react'
import { Game } from './Game'
import './App.css'
import Instruction from './components/Instructions'
import { SudokuProvider } from './context/SudokuContext'
import { useState } from 'react'

const StartButtons = ({showMode}) => {
    return (
        <div className="btnGroup">
        <button className="btn-1" onClick={showMode}>
          <span>Start game</span>
        </button>
        {/* <button className="btn-4" onClick={showInstruction}>
          <span>How to play</span>
        </button> */}
      </div>
      
    )
}

export default StartButtons;