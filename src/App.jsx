import { useState } from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'

function App() {

  return (
<div className="app-container min-h-screen flex flex-col">
  <Header />
  <Outlet />
  <Footer />
</div>

  )
}

export default App
