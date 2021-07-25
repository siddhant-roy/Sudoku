import React from 'react'
import { Game } from './Game'
import './App.css'
import Instruction from './components/Instructions'
import { SudokuProvider } from './context/SudokuContext'
import { useState } from 'react';
import StartButtons from './StartButtons'


export const App = () => {

  const [showing, setShowing] = useState(false);
  const [showBtn, setShowBtn] = useState(false);


  function showMode() {
    setShowing(true)
    setShowBtn(true)    
  }
   {/*function showInstruction() {
     showing = 2
   }
   function hideInstruction() {
     showing = 0
   }*/}
  const status = showing;
  const status2 = showBtn;
  {/* console.log(showing);
  const popup = */}
    
  return (

  

    <div className="mainPage">
          {status === false ? (
            "Please click start"
        
      ) : <SudokuProvider>
      <Game />
    </SudokuProvider>}


    {status2 === false ? (
      <StartButtons showMode={showMode}/> 
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
    </div>
  )
}

export default App
