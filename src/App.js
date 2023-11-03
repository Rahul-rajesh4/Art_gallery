import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Cards from './components/cards/Cards';
import Nav from './components/Navbar/Nav';
import Additem from './components/AddItems/Additem';
import Login from './components/LOGIN/Login';
import Register from './components/REGISTER/Register';
import Edit from './components/EDIT/Edit';
import Display from './components/DISPLAY/Display';

function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/card' element={<Cards/>}/>
        <Route path='/nav' element={<Nav/>}/>
        <Route path='/add' element={<Additem/>}/>
        <Route path='/' element={<Login/>}/>
        <Route path='/reg' element={<Register/>}/>
        <Route path='/Edit/:id' element={<Edit/>}/>
        <Route path='/display' element={<Display/>}/>      
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
