import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () =>(
    <div>
        <h1>GameRangers</h1>
        <NavLink to='/' >Home</NavLink>
        <NavLink to='/help'>Help</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='login' >Login</NavLink>
        <NavLink to='signup' >Signup</NavLink>
    </div>
)

export default  Header