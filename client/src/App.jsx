import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './Pages/Homepage'
import Eventdetail from './component/Eventdetail'
import Detailform from './component/Detailform'
import Contact from './Pages/Contact'
import MainMusic from './Pages/MainMusic'
import MainDance from './Pages/MainDance'
import Bhopal from './component/Bhopal'
import Groove from './component/Groove'
import Login from './admin/Login';


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/salsa' element={<Eventdetail/>}/>
        <Route path='/bhopal' element={<Bhopal/>}/>
        <Route path='/groove' element={<Groove/>}/>
        <Route path='/Detailform/:id' element={<Detailform/>}/>
        <Route path='/Music' element={<MainMusic/>}/>
        <Route path='/Music/:openAt' element={<MainMusic/>}/>
        <Route path='/Dance' element={<MainDance/>}/>
        <Route path='/Dance/:openAt' element={<MainDance/>}/>
        <Route path='/Contact' element={<Contact/>}/>


        <Route path = '/admin' element = {<Login/>} />

      </Routes>
    </div>
  )
}

export default App
