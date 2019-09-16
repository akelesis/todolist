import React from 'react'
import IconButton from '../template/iconButton'
import ReturnButton from '../template/returnButton'


export default props => {

    const renderRows = () => {
        const list = props.tasks || []
        return list.map(task => (
            <tr key={task.id}>
                <td className={task.done ? 'done' : ''}>{task.title}</td>
                <td>
                    <IconButton size="small" color="red" icon="trash" func={() => props.handleRemove(task)} />
                    <IconButton size="small" color="orange" icon="pencil-alt" func={() => props.handleEdit(task)} hide={task.done}></IconButton>
                    <IconButton size="small" color="green" icon="check" func={() => props.handleDone(task)} hide={task.done}></IconButton>
                    <IconButton size="small" color="amber" icon="undo" func={() => props.handlePending(task)} hide={!task.done}></IconButton>
                </td>
            </tr>
        ))
    }
    if(!props.listItems){
        return null
    }
    return (
        <table className="table container">
            <thead>
                <tr>
                    <th>Tarefas</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}