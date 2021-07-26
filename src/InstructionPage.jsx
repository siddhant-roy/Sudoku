import React from 'react'
import './App.css'

const InstructionPage = ({ showGame }) => {
  return (
    <div className="btnGroup">
      <div className="koko">
        <p className="instruct">
          <ul>
            <li>Every square has to contain a single number</li>
            <li>Only the numbers from 1 through to 9 can be used</li>
            <li>Each 3×3 box can only contain each number from 1 to 9 once</li>
            <li>
              Each vertical column can only contain each number from 1 to 9 once
            </li>
            <li>
              Each horizontal row can only contain each number from 1 to 9 once
            </li>
          </ul>
        </p>
      </div>
      <button className="btn-3" onClick={showGame}>
        <span>Play!</span>
      </button>
    </div>
  )
}

export default InstructionPage
