import React from 'react'
import {NavLink} from 'react-router-dom'
// import Home from '../../Pages/home'
// import './header.css'

const header = () => {
  return (
    // <div>header</div>
    <div className='horizontal-list'>

        <NavLink 
        // className={(obj)=>{
        //   const {isActive} = obj;
        //   return 'hmy' + (isActive ? 'active' : '')
        // }}
         to="home">
            </NavLink>
        <NavLink to="login"/>
        <NavLink to="signup"/>
        <NavLink to="about"/>
        <NavLink to="foodList"/>
        <NavLink to="order"/>

    </div>
  )
}

export default header