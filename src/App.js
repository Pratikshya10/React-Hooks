import React from 'react';
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './components/Home';
import Students from './components/Students';
import Contact from './components/Contact';
import Detail from './components/Detail';
import Navbar from './components/Navbar';
import AddStudent from './components/AddStudent';
import EditStudent from './components/EditStudent';
function App() {
  return (
    <Detail>
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
        
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/students' element={<Students/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/students/add/:id' element={<AddStudent />}/>
          <Route path='/students/edit/:id' element={<EditStudent/>}/>
        </Routes>
      </BrowserRouter>
    </div>
    </Detail>
  );
}

export default App;
