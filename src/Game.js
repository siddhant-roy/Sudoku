import React, { useState, useEffect } from 'react'
import moment from 'moment'
import { Header } from './components/layout/Header'
import { GameSection } from './components/layout/GameSection'
import { StatusSection } from './components/layout/StatusSection'
import { Overlay } from './components/Overlay'
import { getUniqueSudoku } from './solver/UniqueSudoku'
import { useSudokuContext } from './context/SudokuContext'

/**
 * Game is the main React component.
 */
export const Game = () => {
  let {
    numberSelected,
    setNumberSelected,
    gameArray,
    setGameArray,
    difficulty,
    setDifficulty,
    setTimeGameStarted,
    fastMode,
    setFastMode,
    cellSelected,
    setCellSelected,
    initArray,
    setInitArray,
    setWon,
  } = useSudokuContext()
  let [mistakesMode, setMistakesMode] = useState(false)
  let [history, setHistory] = useState([])
  let [solvedArray, setSolvedArray] = useState([])
  let [overlay, setOverlay] = useState(false)

  function _createNewGame(e) {
    let [temporaryInitArray, temporarySolvedArray] = getUniqueSudoku(
      difficulty,
      e,
    )
    setInitArray(temporaryInitArray)
    setGameArray(temporaryInitArray)
    setSolvedArray(temporarySolvedArray)
    setNumberSelected('0')
    setTimeGameStarted(moment())
    setCellSelected(-1)
    setHistory([])
    setWon(false)
  }

  function _isSolved(index, value) {
    if (
      gameArray.every((cell, cellIndex) => {
        if (cellIndex === index) return value === solvedArray[cellIndex]
        else return cell === solvedArray[cellIndex]
      })
    ) {
      return true
    }
    return false
  }

  function _fillCell(index, value) {
    if (initArray[index] === '0') {
      let tempArray = gameArray.slice()
      let tempHistory = history.slice()
      tempHistory.push(gameArray.slice())
      setHistory(tempHistory)

      tempArray[index] = value
      setGameArray(tempArray)

      if (_isSolved(index, value)) {
        setOverlay(true)
        setWon(true)
      }
    }
  }

  function _userFillCell(index, value) {
    if (mistakesMode) {
      if (value === solvedArray[index]) {
        _fillCell(index, value)
      } else {
        // TODO: Flash - Mistakes not allowed in Mistakes Mode
      }
    } else {
      _fillCell(index, value)
    }
  }

  function onClickNewGame() {
    _createNewGame()
  }

  function onClickCell(indexOfArray) {
    if (fastMode && numberSelected !== '0') {
      _userFillCell(indexOfArray, numberSelected)
    }
    setCellSelected(indexOfArray)
  }

  function onChangeDifficulty(e) {
    setDifficulty(e.target.value)
    _createNewGame(e)
  }

  function onClickNumber(number) {
    if (fastMode) {
      setNumberSelected(number)
    } else if (cellSelected !== -1) {
      _userFillCell(cellSelected, number)
    }
  }

  function onClickUndo() {
    if (history.length) {
      let tempHistory = history.slice()
      let tempArray = tempHistory.pop()
      setHistory(tempHistory)
      setGameArray(tempArray)
    }
  }

  function onClickErase() {
    if (cellSelected !== -1 && gameArray[cellSelected] !== '0') {
      _fillCell(cellSelected, '0')
    }
  }

  function onClickHint() {
    if (cellSelected !== -1) {
      _fillCell(cellSelected, solvedArray[cellSelected])
    }
  }

  function onClickMistakesMode() {
    setMistakesMode(!mistakesMode)
  }

  function onClickFastMode() {
    if (fastMode) {
      setNumberSelected('0')
    }
    setCellSelected(-1)
    setFastMode(!fastMode)
  }

  function onClickOverlay() {
    setOverlay(false)
    _createNewGame()
  }

  useEffect(() => {
    _createNewGame()
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <div className={overlay ? 'container blur' : 'container'}>
        <Header onClick={onClickNewGame} />
        <div className="innercontainer">
          <GameSection onClick={(indexOfArray) => onClickCell(indexOfArray)} />
          <StatusSection
            onClickNumber={(number) => onClickNumber(number)}
            onChange={(e) => onChangeDifficulty(e)}
            onClickUndo={onClickUndo}
            onClickErase={onClickErase}
            onClickHint={onClickHint}
            onClickMistakesMode={onClickMistakesMode}
            onClickFastMode={onClickFastMode}
          />
        </div>
      </div>
      <Overlay overlay={overlay} onClickOverlay={onClickOverlay} />
    </>
  )
}
