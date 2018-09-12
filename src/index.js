import React from 'react';
import ReactDom from 'react-dom';
import styles from './index.less';
import history from 'utils/history';
import Hello from 'components/Hello';
import TodoList from "components/TodoList";
import UserList from 'components/UserList';
import {
    Router,
    Route,
    Switch,
    Redirect,
    Link
} from 'react-router-dom';
console.log(_.range(10));

ReactDom.render(
    <Router history={history} >
        <div className={styles.wrap}>
            <ul>
                <li><Link to="/">Hello</Link></li>
                <li><Link to="/todos">TodoList</Link></li>
                <li><Link to="/users">UserList</Link></li>
            </ul>
            <Switch>
                <Route exact path="/" component={Hello} />
                <Route path="/todos" component={TodoList} />
                <Route path="/users" component={UserList} />
            </Switch>
        </div>
    </Router>,
    document.getElementById('root')
);