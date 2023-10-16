// import './App.css';
import Navbar from './Component/Navbar';
import {BrowserRouter,Route, Routes} from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/About";
import Contact from './Component/Contact';
import Service from './Component/Service';
// import Popup from './Component/Popup';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path="/" Component={Home}/>
      <Route  path="/About" Component={About}/>
      <Route path="/Contact" Component={Contact}/>
      <Route path="/Service" Component={Service}/>
      
      </Routes>
      </div>
      </BrowserRouter>

  );
}

export default App;