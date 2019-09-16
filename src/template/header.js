import React, {Component} from 'react'

export default class Header extends Component {
    render(){
        return(
            <header className="Todo-header">
                <div className="logo-settings">
                    <img src={require('../imgs/logo.png')} alt="Logo"/>
                    <h3>TO-DO LIST</h3>
                </div>
            </header>
        )
    }
}