import React from 'react'
import {Route, BrowserRouter, Routes} from 'react-router-dom'
import Home from '../components/Home'
import GlobalRedirect from "./GlobalRedirect";
const AppRoutes = () => {
  return (
    <BrowserRouter>
    <GlobalRedirect />
    <Routes>
        <Route path="/dashboard" element={<Home />}></Route>
    </Routes>
    </BrowserRouter>
  )
}
export default AppRoutes