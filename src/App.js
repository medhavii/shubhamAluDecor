import React from 'react'

import Header from '../src/components/Navbar'
import Footer from './components/Footer'
import Form from './components/Form'
import Windows from './pages/Windows'
import Doors from './pages/Doors'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Features from './pages/Wcu'
import Notfound from './pages/Notfound'


const App = () => {
  return (
    <>
       <Header/>
       <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Wcu" element={<Features/>}></Route>
        <Route path="/windows" element={<Windows/>}></Route>
        <Route path="/doors" element={<Doors/>}></Route>
        <Route path="/form" element={<Form/>}></Route>
        <Route path="*/" element={<Notfound/>}></Route>
        
       </Routes>
       
       <Footer/>
      
    </>
    
  )
}

export default App;