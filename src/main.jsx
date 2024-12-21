import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {App} from './App.jsx'
import Login_Form from './modules/Login_Form/index.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/index.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './components/LandingPage/index.jsx'
import Register_Form from './modules/Register_Form/index.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/register" element={<Register_Form/>} />
        <Route path="/login" element={<Login_Form/>} />
      </Routes>
    </Router>
  </StrictMode>,
)
