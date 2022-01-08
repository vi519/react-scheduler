import logo from './logo.svg';
import './App.css';
import './index.css'
import Calendar from './components/Calendar.js'
//import Modal from 'react-modal';
//Modal.setAppElement('#root');
import {  Route, Routes } from "react-router-dom";
import AddEvent from './components/AddEvent.js'
function App() {
  return (
    <div className="App">   

<Routes>
        <Route exact path="/" element={((<App />), (<Calendar/>))}></Route> 
        <Route path="/addevent" element={<AddEvent/>}></Route>    
       
      </Routes>
    </div>
  );
}

export default App;
