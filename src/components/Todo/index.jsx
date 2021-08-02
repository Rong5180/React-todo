import * as React from 'react'
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'

import List from './List'
import Detail from './Detai'


const Todo= (props) => {
    return (
        <Router>
        <Link to='/'>列表</Link>
        <Link to='/detail'>详情</Link>
        <Switch>
            <Route exact path="/" component={List}></Route>
            <Route path="/detail" component={Detail}></Route>
        </Switch>
    </Router>
    )
}
export default Todo