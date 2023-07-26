import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MapPage from './pages/MapPage'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MapPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
