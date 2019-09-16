import React from 'react'
import IconButton from '../template/iconButton'


export default props => {

    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo.id}>
                <td className={todo.done ? 'done' : ''}>{todo.title}</td>
                <td>
                    <IconButton size="small" color="red" icon="trash" func={() => props.handleRemove(todo)} />
                    <IconButton size="small" color="orange" icon="pencil-alt" func={() => props.handleEdit(todo)} hide={todo.done}></IconButton>
                    <IconButton size="small" color="indigo" icon="clipboard-list" func={() => props.handleList(todo)} />
                    <IconButton size="small" color="green" icon="check" func={() => props.handleDone(todo)} hide={todo.done}></IconButton>
                    <IconButton size="small" color="amber" icon="undo" func={() => props.handlePending(todo)} hide={!todo.done}></IconButton>
                </td>
            </tr>
        ))
    }
    if(props.listItems){
        return null
    }
    return (
        <table className="table container">
            <thead>
                <tr>
                    <th>Título da Lista</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}