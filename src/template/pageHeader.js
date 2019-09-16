import React from 'react'

export default props => (
    <header className="page-header container">
        <h3>{props.name} <small>{props.small}</small></h3>
    </header>
)