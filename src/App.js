import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from './component/Navbar';
import Home from './component/Home';
import About from './component/About';
function App() {
  return (
    <>
    <Navbar/>
    <Router>
      <Routes> 
      <Route exact path='/' element={<Home/>}></Route>
      <Route exact path='/about' element={<About/>}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
