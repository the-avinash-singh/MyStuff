const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const cors = require("../middleware/corsHandller")
const Note = require('../models/Note');
const { body, validationResult } = require('express-validator');

// ROUTE 1: Get All the Notes using: GET "/api/note/getuser". Login required
router.get('/fetchallnotes',cors, fetchuser, async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user.id });
        res.json(notes)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// ROUTE 2: Add a new Note using: POST "/api/note/addnote". Login required
router.post('/addnote',cors, fetchuser, [
    body('title', 'Enter a valid title').isLength({ min: 2 }),//validations using express validator
    body('description', 'Description must be atleast 5 characters').isLength({ min: 2 }),], async (req, res) => {
        try {

            const { title, description, tag } = req.body;

            // If there are errors, return Bad request and the errors
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const note = new Note({
                title, description, tag, user: req.user.id
            })
            const savedNote = await note.save()//data sent to db 

            res.json(savedNote)

        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    })
//ROUTE 3:to update a note:PUT"/api/notes/updatenote/id" . login required

router.put("/updatenote/:id",cors,fetchuser,async (req,res)=>{
const {title,description,tag}=req.body;
try {
//create a new note object
const newnote={};
if(title){newnote.title=title};
if(description){newnote.description=description};
if(tag){newnote.tag=tag};

//verifying user
let note=await Note.findById(req.params.id);
if(!note){res.status(400).send("note not found")}
//check weather the note is owned by the user or not
if(note.user.toString()!==req.user.id){
    return res.status(401).json("not allowed")
}
//find the note to be updated and update
 note=await Note.findByIdAndUpdate(req.params.id,{$set:newnote},{new:true})
 res.json(note)
}
 catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
}
})


//ROUTE 4:to delete a note:Delete "/api/notes/updatenote/id" . login required
router.delete("/deletenote/:id",cors,fetchuser,async (req,res)=>{

try {
//verifying user
let note=await Note.findById(req.params.id);
if(!note){res.status(400).send("note not found")}

//check weather the note is owned by the user or not
if(note.user.toString()!==req.user.id){
    return res.status(401).json("not allowed")
}
//find the note to be deleted and delete
 note=await Note.findByIdAndDelete(req.params.id)
 res.json({"Success":"note has been deleted",note:note})
} catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
}
})
module.exports = router