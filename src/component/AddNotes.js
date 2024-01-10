import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/noteContext';

const AddNotes = (props) => {
    const context=useContext(noteContext);
    const {addNote}=context;
    const [note,setNote]=useState({title:"",description:"",tag:""})
    const clikced=(e)=>{
        e.preventDefault();//this will prevent page reloading
        addNote(note.title,note.description,note.tag);
        setNote({title:"",description:"",tag:""});
        props.showAlert("Note added successfully","success")
    }
    const onChange=(e)=>{
            setNote({...note,[e.target.name]:e.target.value})//3 dot-jo ha wo bata raha useke aage se likho, jo name attribute h uski value ko field value ke barabr kr do
    }
  return (
    <div>
       <div className="container my-3">
      <h1>Add To your Stuff</h1>
      <form className='my-3'>
  <div className="form-group">
    <label htmlFor="title">Title</label>
    <input type="text" className="form-control mb-3" id="title" name="title" placeholder="Title" value={note.title} onChange={onChange} minLength={2} required/>
  </div>
  <div className="form-group">
    <label htmlFor="tag">Tag</label>
    <input type="text" className="form-control mb-3" id="tag" name="tag" placeholder="personal, youtube,thought etc." value={note.tag} onChange={onChange}/>{/*name jo h wo state ke jisa hi hoga taki value setki ja sake*/}
  </div>
  <div className="form-group">
    <label htmlFor="description">Write the stuff</label>
    <input type="text" className="form-control mb-3" id="description" name="description" placeholder="Have to go for a walk" value={note.description} onChange={onChange} minLength={5} required/>{/*name jo h wo state ke jisa hi hoga taki value setki ja sake*/}
  </div>
  <button disabled={note.title.length<2 || note.description.length<5} type="submit" className="btn btn-primary shadow" onClick={clikced}>Add to safe<i className="fa-solid fa-circle-plus mx-2"></i></button>
</form>
</div>
    </div>
  )
}

export default AddNotes
