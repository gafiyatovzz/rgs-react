import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Logo(props) {
    return (
        <div className='logo'>
            <NavLink to='/'>
                <img src={props.logo} alt="logo" />
            </NavLink>
        </div>
    )
}
