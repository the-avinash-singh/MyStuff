import React, { useContext} from 'react'
import noteContext from '../context/notes/noteContext';

const NoteItem = (props) => {
  const context=useContext(noteContext);
  const {deleteNote}=context;
   const {note,updateNote,showAlert}=props;
  return (
    <div className='col-md-6 col-lg-6 w-md-full w-lg-full'>
      <div className="card my-3 shadow">
      <div style={{
            display:"flex",
            justifyContent:"flex-end",
            position:"absolute",
            top:"-6px",
            right:"-4px"
          }}>
        <span className="badge rounded-pill bg-info" >
    {note.tag}
    </span>
    </div>
  <div className="card-body">
    <div className="d-flex">
    <h5 className="card-title">{note.title}</h5>
    <i className="fa-regular fa-trash-can mx-2 pt-1"onClick={()=>{deleteNote(note._id);
    showAlert("Deleted Successfully","success")}}></i>
    <i className="fa-regular fa-pen-to-square mx-2 pt-1"onClick={()=>{updateNote(note)}}></i>
    </div>
    <p className="card-text text-light-emphasis">{note.description}</p>
  </div>
</div>
    </div>
  )
}

export default NoteItem
