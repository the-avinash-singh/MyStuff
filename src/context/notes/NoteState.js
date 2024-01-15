import React, { useState } from "react";
import NoteContext from "./noteContext";
const NoteState=(props)=>{
  const host="https://my-stuff-two.vercel.app/"

 const notesInitial= []
  const [note,setNote]=useState(notesInitial)
//get all notes
  const getNote=async()=>{
    //call the api
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem("token")
      }
    });
    const json=await response.json();
    setNote(json);
  }
  //add note
const addNote=async(title,description,tag)=>{
  //call the api
  const response = await fetch(`${host}/api/notes/addnote`, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json',
      "auth-token":localStorage.getItem("token")
    },
       body: JSON.stringify({title,description,tag}) // body data type must match "Content-Type" header
      });
      const notes=await response.json()
//logic to add
setNote(note.concat(notes));//this will update and add in the note array not in db
}
  //delete note
const deleteNote=async(id)=>{
  //call the api
  const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
    method: "DELETE", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
      "auth-token":localStorage.getItem("token")
    },
  });
  const json=await response.json();
  console.log(json)
//logic to delete
  const newNotes=note.filter((note)=>{ return note._id!==id});//this will remove the object with passed id from note array
  setNote(newNotes)
}
//edit note
const editNote=async (id,title,tag,description)=>{
  //api call
  const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
    method: "PUT", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
      "auth-token":localStorage.getItem("token")
    },
       body: JSON.stringify({title,tag,description}), // body data type must match "Content-Type" header
  });
  const json=await response.json()
  console.log(json)

  //to show the updated notes in the ui
  let newNotes=JSON.parse(JSON.stringify(note))
//logic to edit
  for (let index = 0; index < note.length; index++) {
    const element = note[index];
    if (element._id===id){
      newNotes[index].title=title;
      newNotes[index].tag=tag;
      newNotes[index].description=description;
      break;
    }
  }
  setNote(newNotes);
  }
   //here the value is what send for providing data
      return (<NoteContext.Provider value={{note,addNote,deleteNote,editNote,getNote}}> 
        {props.children}
    </NoteContext.Provider>)

}

export default NoteState;