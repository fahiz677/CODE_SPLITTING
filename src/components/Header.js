import React from 'react'
import { NavLink}  from 'react-router-dom';
import "../App.css" ;

const Header = () => {
  return (
    <div>
        <ul className='list'>
            <li className='items'>
                <NavLink style={{ textDecoration: 'none' , color : "#fff"}} to="/" >Home</NavLink>
            </li>
            <li className='items'>
                <NavLink style={{ textDecoration: 'none' , color : "#fff"}} to="/product" >Products</NavLink>
            </li>
            <li className='items'> 
                <NavLink  style={{ textDecoration: 'none' , color : "#fff"}}to="/service" >Services</NavLink>
            </li>
            <li className='items'>
                <NavLink  style={{ textDecoration: 'none' , color : "#fff"}}to="/contact" >Contact</NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Header