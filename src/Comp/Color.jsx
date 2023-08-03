import React from 'react'
import {nanoid} from "nanoid"
// install nanoid librarary to generate unique id for mapping
import SingleColor from "./SingleColor"                                                                                                                                                                                       


const Color = ({colors}) => {
  return (
    <section className='color-list' style={{display:"flex", flexWrap:"wrap", marginTop:"25px"}} >
      {colors.map((color,index)=>{
        return<SingleColor key={nanoid()} color={color} index={index}/>
      })}

    </section>
  )
}

export default Color