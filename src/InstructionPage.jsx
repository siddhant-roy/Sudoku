import React from 'react'
import { Game } from './Game'
import './App.css'
import Instruction from './components/Instructions'
import { SudokuProvider } from './context/SudokuContext'
import { useState } from 'react'

const InstructionPage = ({showMode}) => {
    return (
        <div className="btnGroup">
        <p>
            <ul>
                <li>Every square has to contain a single number</li>
                <li>Only the numbers from 1 through to 9 can be used</li>
                <li>Each 3×3 box can only contain each number from 1 to 9 once</li>
                <li>Each vertical column can only contain each number from 1 to 9 once</li>
                <li>Each horizontal row can only contain each number from 1 to 9 once</li>
            </ul>
        </p>
        <button className="btn-2" onClick={showMode}>
         <span>
             Main Page
        </span> 
        </button>
       
      </div>
      
    )
}

export default InstructionPage;