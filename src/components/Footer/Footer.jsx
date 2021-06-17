import React from 'react'
import Contacts from '../Header/Contacts/Contacts'
import Logo from '../Header/Logo/Logo'
import Copyright from './Copyright/Copyright'

export default function Footer(props) {
    return (
        <footer className="footer">
            <div className="container">
                <Logo logo={props.logo}/>
                <Copyright copyrignt={props.copyrignt}/>
                <Contacts client={props.client}/>
            </div>
        </footer>
    )
}
