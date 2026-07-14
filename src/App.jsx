import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Addpet from './components/Addpet'
import ViewPet from './components/ViewPet'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Addpet />} />
        <Route path="/view" element={<ViewPet />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

