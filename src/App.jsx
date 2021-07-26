import React from 'react'
import { Game } from './Game'
import './App.css'
import Instruction from './components/Instructions'
import { SudokuProvider } from './context/SudokuContext'
import { useState } from 'react';
import StartButtons from './StartButtons'
import Instructions from './Instructions'
import InstructionPage from './InstructionPage'


export const App = () => {

  const [showing, setShowing] = useState(false);
  const [showBtn, setShowBtn] = useState(false);
  const [instr, setInstr] = useState(false);


  function showMode() {
    setShowing(true)
    setShowBtn(true)
    setInstr(true)
  }
  {/*function showInstruction() {
     showing = 2
   }
   function hideInstruction() {
     showing = 0
   }*/}
  
  {/* console.log(showing);
  const popup = */}

  return (



    <div className="mainPage">
      {showing === false ? (
        ""

      ) : <SudokuProvider>
        <Game />
      </SudokuProvider>}


      {showBtn === false ? (
        <StartButtons showMode={showMode} />
      ) : null}
      {/*<div className="btnGroup">
        <button className="btn-1" onClick={showMode}>
          <span>Start game</span>
        </button>
        <button className="btn-4" onClick={showInstruction}>
          <span>How to play</span>
        </button>
      </div>
       {popup} */}

      {instr === false ? (
        <Instructions showMode={showMode} />

      ) : <InstructionPage />}

    </div>
  )
}

export default App
