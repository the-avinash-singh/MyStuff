import React from 'react'
import Intro from './Intro'
const About = () => {
//here we made the object which delivers the values to the component
  return (
    <div>
      {/*here we wil use the syntex "obj.value.variable" because the values of
      state are passed as object and it has more than 1 attribute(update,state) in the value attribute agar 1 hota to sidha "obj.variable"*/}
     <Intro/>
     <div style={{height:'20px'}}></div>
    </div>
  )
}

export default About
