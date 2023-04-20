import React,{ useContext, useEffect } from 'react'
import noteContext from '../context/notes/noteContext' 
const About = () => {
//here we made the object which delivers the values to the component
  return (
    <div>
      this is about{/*here we wil use the syntex "obj.value.variable" because the values of
      state are passed as object and it has more than 1 attribute(update,state) in the value attribute agar 1 hota to sidha "obj.variable"*/}
    </div>
  )
}

export default About
