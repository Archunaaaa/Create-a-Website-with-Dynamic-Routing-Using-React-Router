import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Components/Header'

function App() {
  return (
   <Router>
    <div>
    <Routes>
    <Route path='/' element={<Header />} />

     
    </Routes>
    </div>
   </Router>
  )
}

export default App