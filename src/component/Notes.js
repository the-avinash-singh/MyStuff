import React, { useContext, useEffect,useRef,useState } from 'react'
import noteContext from '../context/notes/noteContext';
import NoteItem from './NoteItem';
import {  useNavigate } from 'react-router-dom';
import Spinner from './Spinner';

const Notes = (props) => {
    const context=useContext(noteContext);
    let navigate=useNavigate();
    const {note,getNote,editNote}=context;
    const [loding,setLoding]=useState(false)
    useEffect(()=>{
      if(localStorage.getItem("token")===null){
        navigate("/login");
      }  
      else{
        getNote();
        setLoding(true)
      }
      // eslint-disable-next-line
    },[])
    const ref=useRef(null)
    const refClose=useRef(null)
    const [notes,setNotes]=useState({id:"",etitle:"",edescription:"",etag:"default"})
    
    const updateNote=(currentNotes)=>{
    ref.current.click()
    setNotes({id:currentNotes._id, etitle:currentNotes.title,etag:currentNotes.tag,edescription:currentNotes.description})
    }
    const clikced=(e)=>{
      editNote(notes.id,notes.etitle,notes.etag,notes.edescription)
      refClose.current.click();
      e.preventDefault();//this will prevent page reloading
      props.showAlert("Note updated successfully","success")
  }
  const onChange=(e)=>{
          setNotes({...notes,[e.target.name]:e.target.value})//3 dot-jo ha waha useke aage se likho, jo name attribute h uski value ko field value ke barabr kr do
  }
  return (
    <>
<button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal"/>
<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Edit your Stuff</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form className='my-3'>
  <div className="form-group">
    <label htmlFor="etitle">Title</label>
    <input type="text" className="form-control mb-3" id="etitle" name="etitle" value={notes.etitle} placeholder="Enter title"onChange={onChange} minLength={2} required/>
  </div>
  <div className="form-group">
    <label htmlFor="etag">Tag</label>
    <input type="text" className="form-control mb-3" id="etag" name="etag" value={notes.etag} placeholder="Give a tag-personal, youtube,thought etc"onChange={onChange}/>{/*name jo h wo state ke jisa hi hoga taki value setki ja sake*/}
  </div>
  <div className="form-group">
    <label htmlFor="edescription">Write the stuff</label>
    <input type="text" className="form-control mb-3" id="edescription" value={notes.edescription} name="edescription" placeholder="example:Have to go for walk"onChange={onChange} minLength={5} required/>{/*name jo h wo state ke jisa hi hoga taki value setki ja sake*/}
  </div>
</form>
      </div>
      <div className="modal-footer">
        <button type="button" ref={refClose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button disabled={notes.etitle.length<2 || notes.edescription.length<5 || notes.etag.length===0} type="button" className="btn btn-primary" onClick={clikced}>Update it</button>
      </div>
    </div>
  </div>
</div>
      <div className="container row my-3 mb-5">
      <h1>Your Safe's stuff</h1>
      <div className="container mx-2">
      {note.length===0 && "Add stuff to see here"}
      </div>
      {loding?<Spinner/>:note.map((note)=>{
        return(
          <NoteItem key={note._id} updateNote={updateNote} showAlert={props.showAlert} note={note}/>
        )
      })}
     </div>
     <div style={{height:'10px'}}></div>
     </>
  )
}

export default Notes
