import React from "react"
import Notes from "./Notes"
import AddNotes from "./AddNotes"
import Username from "./Username"

const Home = (props) => {
  return (
    <div>
      <Username/>
      <AddNotes showAlert={props.showAlert}/>
    <Notes  showAlert={props.showAlert}/>
    </div>
  )
}

export default Home
