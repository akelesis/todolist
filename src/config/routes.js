import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Todo from '../todo/todo'

export default props => (
    <Switch>
        <Route exact path='/' component={Todo}/>
    </Switch>
)