import React from 'react'
import { Game } from './Game'
import './App.css'
import Instruction from './components/Instructions'
import { SudokuProvider } from './context/SudokuContext'
import { useState } from 'react'

const Instructions = ({showMode}) => {
    return (
        <div className="btnGroup">
        <button className="btn-2" onClick={showMode}>
         <span>
             Instructions
        </span> 
        </button>
       
      </div>
      
    )
}

export default Instructions;