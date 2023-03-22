import React from 'react'
import { NavLink}  from 'react-router-dom';
import "../App.css" ;

const Header = () => {
    let activeStyle = {
        color: '#111',
        border:'1px solid #111',
        borderRadius:'2px',
        padding:'10px',
    };
  return (
    <div>
        <ul>
            <li>
                <NavLink  to="/" style={({isActive})=> (isActive ? activeStyle : undefined)}>Home</NavLink>
            </li>
            <li>
                <NavLink  to="/product" style={({isActive})=> (isActive ? activeStyle : undefined)}>Products</NavLink>
            </li>
            <li>
                <NavLink  to="/service" style={({isActive})=> (isActive ? activeStyle : undefined)}>Services</NavLink>
            </li>
            <li>
                <NavLink  to="/contact" style={({isActive})=> (isActive ? activeStyle : undefined)}>Contact</NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Header