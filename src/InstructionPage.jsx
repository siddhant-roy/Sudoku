import React from 'react'
import { Game } from './Game'
import './App.css'
import Instruction from './components/Instructions'
import { SudokuProvider } from './context/SudokuContext'
import { useState } from 'react'

const InstructionPage = ({showMode}) => {
    return (
        <div className="btnGroup">
        <button className="btn-2" onClick={showMode}>
         <span>
             You are reading instructions
        </span> 
        </button>
       
      </div>
      
    )
}

export default InstructionPage;