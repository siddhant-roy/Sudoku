import React, { useState } from 'react'
import { Game } from './Game'
import './App.css'
import { SudokuProvider } from './context/SudokuContext'
import StartButtons from './StartButtons'
import Instructions from './Instructions'
import InstructionPage from './InstructionPage'

export const App = () => {
  const [showing, setShowing] = useState(false)
  const [showBtn, setShowBtn] = useState(true)
  const [instr, setInstr] = useState(true)
  const [inst, setInst] = useState(false)

  function showGame() {
    setShowing(true)
    setShowBtn(false)
    setInstr(false)
    setInst(false)
  }

  function showInstr() {
    setShowing(false)
    setShowBtn(false)
    setInstr(false)
    setInst(true)
  }

  return (
    <div className="mainPage">
      {showing ? (
        <SudokuProvider>
          <Game />
        </SudokuProvider>
      ) : null}

      {showBtn ? <StartButtons showGame={showGame} /> : null}

      {instr ? <Instructions showInstr={showInstr} /> : null}

      {inst ? <InstructionPage showGame={showGame} /> : null}
    </div>
  )
}

export default App
