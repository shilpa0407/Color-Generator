import React, { useState } from 'react'
import "./Form.css"

const Form = ({addColor}) => {
  const [color, setColor] = useState("");

  const handleSubmit = (e) => {
  e.preventDefault();
  addColor(color)
  }

  return (
    <section>
      <div className='h3'>Color generator</div>
      <form className='color-form' onSubmit={handleSubmit}>
        <input className='input-color-01' type='color' value={color} onChange={(e) => setColor(e.target.value)} />
        <input className='input-color-02' type='text' value={color} placeholder='#f15025' onChange={(e) => setColor(e.target.value)} />
        <button type='submit' className='btn-color' style={{ background: color }}>Submit</button>
      </form>
    </section>
  )
}

export default Form