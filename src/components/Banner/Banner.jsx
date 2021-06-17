import React from 'react'
import Content from './Content/Content'

export default function Banner(props) {
    return (
        <div className='banner main-bg'>
            <div className="container">
                <Content
                    description={props.description}
                    client={props.client}
                />
            </div>
        </div>
    )
}
