
import React from 'react'
import Home from './Home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Courses from './Courses/Courses'
import Signup from './components/Signup'


function App() {
  return (
   <>
  <div className='dark:bg-white dark:text-black'>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/course" element={<Courses/>}/>
    <Route path="/signup" element={<Signup/>}/>
   </Routes>
  </div>
   </>
  )
}

export default App
