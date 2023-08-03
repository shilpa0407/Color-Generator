import React from 'react'
import "./SingleColor.css"
import { toast } from 'react-toastify';

const SingleColor = ({ color, index }) => {
  console.log(color)
  const { hex, weight } = color;

  const saveToclipboard = async () => {

    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`)
        toast.success("Color Copied to clipboard")
      } catch {
        toast.error("Failed to copy color to Clipboard")
      }
    } else {
      toast.error("Clipboard access not availabel")
    }
  }

  return (
    <div className='color-container'>
    <div className ="save-to-clip-board" style={{ background: `#${hex}`}}  onClick={saveToclipboard}> 
      <div className ="weight" style={{ color: index > 10 ? "#fff" : "#000" }}>
        {weight}%
      </div>
      <div className ="percent" style={{ color: index > 10 ? "#fff" : "#000" }}>
        #{hex}
      </div>
    </div>
    </div>
  )
}

export default SingleColor