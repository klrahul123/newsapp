import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import News from './News'

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={ <News category="all"/> } />
    <Route path='/sports' element={ <News category="sports"/>} />
    <Route path='/business' element={<News category="business"/>} />
    <Route path='/entertainment' element={<News category="entertainment"/>} />
    <Route path='/health' element={<News category="health"/>} />
    <Route path='/science' element={<News category="science"/>} />
    <Route path='/technology' element={<News category="technology"/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App