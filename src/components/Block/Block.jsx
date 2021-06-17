import React from 'react'
import Title from './Title/Title'
import Subtitle from './Subtitle/Subtitle'
export default function Block(props) {
    return (
        <div className='block'>
            <div className="block_top">
                <Title title={props.title}/>
                {
                    props.subtitle ? <Subtitle subtitle={props.subtitle} /> : ''
                }
            </div>
            <div className="block_main">
                {props.children}
            </div>
        </div>
    )
}
