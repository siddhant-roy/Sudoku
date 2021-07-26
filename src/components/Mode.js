import React from 'react'

/**
 * React component for the Mistakes Mode / Fast Mode
 * elements in the Status Section.
 */
export const Mode = (props) => {
  return (
    <div className={'status__action-mistakes-mode'}>
      <label className={'status__action-mistakes-mode-switch'}>
        <input type="checkbox" />
        <span
          className={'status__action-mistakes-mode-slider'}
          onClick={props.onClickMode}
        ></span>
      </label>
      <p className="status__action-text">{"Don't Allow Mistakes"}</p>
    </div>
  )
}
