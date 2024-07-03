import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import View from './components/View'
import Add from './components/Add'
import Navbar from './components/Navbar'
import { Routes,Route } from 'react-router-dom'
import Book from './components/Book'
import Tourism from './components/Tourism'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/'element={<View/>}></Route>
        <Route path='/add'element={<Add person={{name:'Maya',
      email:'maya123@gmail.com',
      password:'maya12',
      address:'Trivandrum'}}/>}></Route>
        <Route path='/book'element={<Book/>}></Route>
        <Route path='/tourism'element={<Tourism/>}></Route>
      </Routes>
    </>
  )
}

export default App
