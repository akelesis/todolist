import React, { Component } from 'react'
import PageHeader from '../template/pageHeader'
import TodoForm from '../todo/todoForm'
import TodoList from '../todo/todoList'
import ListForm from '../todo/listForm'
import ListItems from '../todo/listItems'
import ReturnButton from '../template/returnButton'


export default class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = { description: '', list: [], nextId: 0, nextIdItem: 0, editId: null, editIdItem: null, listItems: false, small: 'Cadastro', tasks: [], listId: null}

        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleAddItem = this.handleAddItem.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleRemoveItem = this.handleRemoveItem.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
        this.handleEditItem = this.handleEditItem.bind(this)
        this.handleList = this.handleList.bind(this)
        this.handleDone = this.handleDone.bind(this)
        this.handleDoneItem = this.handleDoneItem.bind(this)
        this.handlePending = this.handlePending.bind(this)
        this.handlePendingItem = this.handlePendingItem.bind(this)
        this.returnHome = this.returnHome.bind(this)
        
    }
    
    handleAdd() {
        if (this.state.description === "") {
            return
        }
        if (this.state.editId !== null) {
            this.setState(state => {
                const itemIndex = state.list.findIndex(elem => elem.id === this.state.editId)
                const newList = state.list 
                newList[itemIndex].title = this.state.description
                state.editId = ''

                return {
                    description: '',
                    newList
                }
            })
        }
        else{
            this.setState(state => {
                const item = { id: state.nextId, title: this.state.description, tasks: [], done: false }
                const list = state.list.concat(item)
                const nextId = state.nextId + 1
    
                return {
                    description: '',
                    list,
                    nextId: nextId
                }
            })
        }
    }
    handleAddItem(){
        if (this.state.description === "") {
            return
        }
        if (this.state.editIdItem !== null) {
            this.setState(state => {
                const itemIndex = state.tasks.findIndex(elem => elem.id === this.state.editIdItem)
                const newList = state.tasks 
                newList[itemIndex].title = this.state.description
                state.editIdItem = null

                return {
                    description: '',
                    tasks: newList
                }
            })
        }
        else{
            this.setState(state => {
                const item = { id: state.nextIdItem, title: this.state.description, done: false }
                const tasks = state.tasks.concat(item)
                const nextIdItem = state.nextIdItem + 1
    
                return {
                    description: '',
                    tasks,
                    nextIdItem
                }
            })
        }
    }

    handleChange(e) {
        this.setState({ ...this.state, description: e.target.value })
    }

    handleRemove(todo) {
        const newList = this.state.list
        const removeIndex = newList.findIndex(index => index.id === todo.id)
        console.log(removeIndex)
        newList.splice(removeIndex, 1)
        this.setState({ ...this.state, list: newList })
    }
    
    handleRemoveItem(task) {
        const newList = this.state.tasks
        const removeIndex = newList.findIndex(index => index.id === task.id)
        console.log(removeIndex)
        newList.splice(removeIndex, 1)
        this.setState({ ...this.state, tasks: newList })
    }

    handleEdit(todo) {
        this.setState({ ...this.state, description: todo.title, editId: todo.id })
    }

    handleEditItem(todo) {
        this.setState({ ...this.state, description: todo.title, editIdItem: todo.id })
    }

    handleList(todo) {
       this.setState(state => {
           const listItems = true
           const small = todo.title
           const tasks = todo.tasks
           console.log(tasks)
           const listId = todo.id

           return {
               listItems,
               small,
               tasks,
               listId
           }
       })
    }

    handleDone(todo) {
        const newList = this.state.list
        const doneIndex = newList.findIndex(index => index.id === todo.id)
        newList[doneIndex].done = true
        this.setState({ ...this.state, list: newList })
    }
    handleDoneItem(task){
        const newList = this.state.tasks
        const doneIndex = newList.findIndex(index => index.id === task.id)
        newList[doneIndex].done = true
        this.setState({ ...this.state, tasks: newList })
    }

    handlePending(todo){
        const newList = this.state.list
        const doneIndex = newList.findIndex(index => index.id === todo.id)
        newList[doneIndex].done = false
        this.setState({ ...this.state, list: newList })
    }

    handlePendingItem(task){
        const newList = this.state.tasks
        const doneIndex = newList.findIndex(index => index.id === task.id)
        newList[doneIndex].done = false
        this.setState({ ...this.state, tasks: newList })
    }

    returnHome(){
        this.setState(() => {
            const newList = this.state.list
            const small = "Cadastro"
            newList[this.state.listId].tasks = this.state.tasks
            console.log(newList[this.state.listId].tasks)

            return{
                list: newList, 
                listItems: false,
                small
            }
        })
        
    
    }

    render() {
        return (
            <div>
                <PageHeader name='Lista de tarefas' small={this.state.small} />
                <TodoForm 
                    listItems={this.state.listItems}
                    description={this.state.description} 
                    handleAdd={this.handleAdd} 
                    handleChange={this.handleChange} 
                />
                <ListForm 
                    listItems={this.state.listItems}
                    description={this.state.description} 
                    handleAdd={this.handleAddItem} 
                    handleChange={this.handleChange}
                />
                <TodoList 
                    list={this.state.list} 
                    listItems={this.state.listItems}
                    handleRemove={this.handleRemove} 
                    handleEdit={this.handleEdit} 
                    handleDone={this.handleDone}
                    handlePending={this.handlePending}
                    handleList={this.handleList}
                />
                <ListItems 
                    tasks={this.state.tasks}
                    listId={this.state.listId}
                    listItems={this.state.listItems}
                    handleRemove={this.handleRemoveItem} 
                    handleEdit={this.handleEditItem} 
                    handleDone={this.handleDoneItem}
                    handlePending={this.handlePendingItem}
                    returnHome={this.returnHome}
                />

                <ReturnButton 
                    color="indigo darken-2" 
                    func={this.returnHome}
                    size="large"
                    icon="arrow-left"
                    listItems={this.state.listItems}
                />
                
            </div>
        )
    }
}
