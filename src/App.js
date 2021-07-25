import React from 'react'
import { Game } from './Game'
import './App.css'
import Instruction from './components/Instructions'
import { SudokuProvider } from './context/SudokuContext'

var showing = 1
export const App = () => {
  function showMode() {
    showing = 1
  }
  function showInstruction() {
    showing = 2
  }
  function hideInstruction() {
    showing = 0
  }
  const status = showing
  const popup =
    status === 1 ? (
      <SudokuProvider>
        <Game />
      </SudokuProvider>
    ) : status === 2 ? (
      <Instruction onClick={hideInstruction} />
    ) : null
  return (
    <div className="mainPage">
      <div className="btnGroup">
        <button className="btn-1" onClick={showMode}>
          <span>Start game</span>
        </button>
        <button className="btn-4" onClick={showInstruction}>
          <span>How to play</span>
        </button>
      </div>
      {popup}
    </div>
  )
}

export default App
