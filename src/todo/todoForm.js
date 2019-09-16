import React from 'react'
import IconButton from '../template/iconButton'

export default props => {
    if(props.listItems){
        return null
    }
    const submitHandler = e => {
        if(e.key === 'Enter'){
            props.handleAdd()
        }
    }
    return (
        <div role='form' className="todo-form container">
            <div className="input-field">
                <input id="description" type="text" onChange={props.handleChange} className="validate" value={props.description} onKeyUp={submitHandler}/>
                <label htmlFor="description">Título</label>
            </div>

            <IconButton size="large" color="blue" icon="plus" func={props.handleAdd}/>

        </div>
    )
}