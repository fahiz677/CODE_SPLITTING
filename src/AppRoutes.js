import React from 'react'
import {Route , Routes} from 'React-router-dom';
import Home from './pages/Home';
import Products from './pages/Products'
import Services from './pages/Services'
import Contact from './pages/Contact'
const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' elements={<Home />} />
        <Route path='/product' elements={<Products />} />
        <Route path='/service' elements={<Services />} />
        <Route path='/contact' elements={<Contact />} />
    </Routes>
  )
}

export default AppRoutes