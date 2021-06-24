import React from 'react'
import { NavLink } from 'react-router-dom'

function Logo(props) {
    return (
        <div className='logo'>
            <NavLink to='/'>
                <img src={props.logo} alt="logo" className='logo_img'/>
            </NavLink>
        </div>
    )
}


export default Logo