import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Copyright(props) {
    return (
        <div className="copyright">
            <p>{props.copyrignt.text}</p>
            <NavLink to={props.copyrignt.link}>{props.copyrignt.terms}</NavLink>
        </div>
    )
}
