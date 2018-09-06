import React from 'react';
import ReactDom from 'react-dom';
import styles from './index.less';
import history from 'utils/history';
import Hello from 'components/Hello';
import TodoList from "components/TodoList";
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
                <li><Link to="/todo">TodoList</Link></li>
            </ul>
            <Switch>
                <Route exact path="/" component={Hello} />
                <Route path="/todo" component={TodoList} />
            </Switch>
        </div>
    </Router>,
    document.getElementById('root')
);