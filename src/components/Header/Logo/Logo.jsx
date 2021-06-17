import React from 'react'
import { NavLink } from 'react-router-dom'

function Logo(props) {
    return (
        <div className='logo'>
            <NavLink to='/'>
                <img src={props.logo} alt="logo" />
            </NavLink>
        </div>
    )
}


export default Logo