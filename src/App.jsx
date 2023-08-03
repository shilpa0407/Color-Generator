import React, { useState } from 'react'
import Form from './Comp/Form'
import Color from './Comp/Color'
import { ToastContainer, toast } from 'react-toastify'
import Values from 'values.js'
//  install value.js library to generate colors


function App() {

  const [colors, setColors] = useState(new Values("#ff4500").all(10));
  const addColor = (color) => {
    try {
      const newColors = new Values(color).all(10)
      setColors(newColors)
    } catch (error) {
      toast.error(error.massage);
    }
  };

  return (
    <>
      <section className='conatiner'>
        <Form addColor={addColor} />
        <ToastContainer position='top-center' />
        <Color colors={colors} />
      </section>
    </>
  )
}

export default App
