import React, {lazy , Suspense} from 'react'
import {Route , Routes} from 'react-router-dom';
const Home = lazy(() => import(/* webpackChunkName: "Home" */ "./pages/Home") )
const Products = lazy(() => import(/* webpackChunkName: "Products" */ "./pages/Products") )
const Services = lazy(() => import(/* webpackChunkName: "Services" */ "./pages/Services") )
const Contact = lazy(() => import(/* webpackChunkName: "Contact" */ "./pages/Contact") )

const AppRoutes = () => {
  return (
    <Suspense fallback={<h2>...Loading</h2>}>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Products />} />
        <Route path='/service' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
    </Routes>
    </Suspense>
  )
}

export default AppRoutes