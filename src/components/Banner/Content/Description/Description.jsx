import React from 'react'

export default function Description(props) {
    console.log(props.description);
    return (
        <div className='description'>
            <h1>{props.description.title}</h1>
            <p>{props.description.text}</p>
        </div>
    )
}
