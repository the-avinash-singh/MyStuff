import React from "react"
import Notes from "./Notes"
import AddNotes from "./AddNotes"

const Home = (props) => {
  return (
    <div>
      <AddNotes showAlert={props.showAlert}/>
    <Notes  showAlert={props.showAlert}/>
    </div>
  )
}

export default Home
