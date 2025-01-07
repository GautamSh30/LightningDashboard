import React from 'react'
import {Route, BrowserRouter, Routes} from 'react-router-dom'
import Home from '../components/Home'
const AppRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/dashboard" element={<Home />}></Route>
    </Routes>
    </BrowserRouter>
  )
}
export default AppRoutes