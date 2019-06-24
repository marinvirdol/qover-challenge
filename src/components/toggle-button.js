import React from 'react'
import './toggle-button.css'

function ToggleButton({onchange}) {
  const [checked, setChecked] = React.useState(true)

  function handleChange(event) {
    setChecked(!checked)
    onchange(!checked)
  }

  return (
    <label className="switch">
      <input type="checkbox" value={checked} onChange={handleChange} defaultChecked/>
      <span className="slider round"></span>
    </label>
  )
}

export default ToggleButton
