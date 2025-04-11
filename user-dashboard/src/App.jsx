import HomePage from '../components/HomePage'
import Navbar from '../components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import '../styles/navbar.css'
import Footer from '../components/Footer';
import Filefir from '../components/Filefir';
import Checkstatus from '../components/Checkstatus';
import Bookapp from '../components/Bookapp';
import Dashboard from '../components/Dashboard';
import FIRForm from '../components/FIRform';

function App() {
  return (
    <div className='main'>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path = '/' element={<HomePage/>}/>
          <Route path = '/dashboard' element={<Dashboard/>}/>
          <Route path = '/filefir' element={<FIRForm/>}/>
          <Route path = '/checkstatus' element={<Checkstatus/>}/>
          <Route path = '/bookapp' element={<Bookapp/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
