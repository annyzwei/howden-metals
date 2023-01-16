import React from 'react'
import './popup.css'

function Popup(props) {
    return (props.trigger) ? (
      <div className = "popup">
        <h3>Copied to Clipboard!</h3>
      </div>
    ): "ahah";
  }

export default Popup