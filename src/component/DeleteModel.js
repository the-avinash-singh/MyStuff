import React from 'react'

const DeleteModel = () => {
  return (
    <div>
      <div className="modal-dialog modal-dialog-centered">
      <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Alert</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        Delete your accout.<br/>
        this action can't be reverted
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-danger">Delete</button>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default DeleteModel
