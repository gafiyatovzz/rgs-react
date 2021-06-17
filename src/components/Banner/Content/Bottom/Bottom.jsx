import React from 'react'

export default function Bottom(props) {
    const client = props.client
    return (
        <div className='banner_bottom'>
            <a href={client.email.link} className="">{client.email.name}</a>
            <p>Лучшие на рынке</p>
        </div>
    )
}
