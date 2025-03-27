import { useState } from 'react'
import React from 'react'

import './App.css'
import Navbar from './components/ui/Navbar'
import Header from './components/home/Header'
import Footer from './components/ui/footer'
import CardContainer from './components/home/CardContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
      <Header />
        <CardContainer />
    <Footer />
    </>
  )
}

export default App
