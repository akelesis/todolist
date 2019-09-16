import React from 'react'
import IconButton from '../template/iconButton'

export default props => {
    if(!props.listItems){
        return null
    }
    return (
        <div role='form' className="todo-form container">
            <div className="input-field">
                <input id="description" type="text" onChange={props.handleChange} className="validate" value={props.description}/>
                <label htmlFor="description">Título</label>
            </div>

            <IconButton size="large" color="blue" icon="plus" func={props.handleAdd}/>

        </div>
    )
}