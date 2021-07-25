import React from 'react'
import Instruction from './components/layout/Instruction'
import Game from './Game'
import './StartPage.css'
import { SudokuProvider } from './context/SudokuContext'
import './Animation.css'

var showing = 0
const [stat, SetStat] = useState(0)
const landingPage = () => {
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

export default landingPage
