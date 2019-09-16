import React from 'react'


export default props => {
    if (!props.listItems) {
        return null
    }
    else {
        return (

            <button className={"btn-floating btn-" + props.size + " waves-effect waves-light list-button " + props.color} id="return-button" onClick={props.func}>
                <i className={"fas fa-" + props.icon}></i>
            </button>
        )
    }
}