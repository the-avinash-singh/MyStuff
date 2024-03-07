import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from './component/Navbar';
import Home from './component/Home';
import About from './component/About';
import NoteState from './context/notes/NoteState';
import Alert from './component/Alert';
import Login from './component/Login';
import Signup from './component/Signup';
import { useState } from 'react';
import Profile from './component/Profile';
import Landing from './component/Landing';
function App() {
  const[alert,setAlert]=useState(null);
  const showAlert=(message,type,color)=>{
    setAlert({
msg:message,
type:type,
color:color,
    })
    setTimeout(()=>
    setAlert(null),1500
    )
  }
  return (
    <>
    {/*we have wraped all the component with NoteState so that its value is accessable in all the compoents and their child component*/}
    <NoteState>
    <Router>
    <Navbar/>
    <Alert alert={alert}/>
    <div className='container'>
      <Routes> 
      <Route exact path='/login' element={<Login showAlert={showAlert}/>}/>
      <Route exact path='/signup' element={<Signup showAlert={showAlert}/>}/>
      <Route exact path='/home' element={<Home showAlert={showAlert}/>}/>
      <Route exact path='/about' element={<About/>}/>
      <Route exact path='/Profile' element={<Profile showAlert={showAlert}/>}/>
      <Route exact path="/" element={<Landing/>}/>
      </Routes>
      </div>
    </Router>
    </NoteState>
    </>
  );
}

export default App;
