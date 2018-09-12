import React from 'react';
import {observer} from "mobx-react";
import {toJS} from 'mobx';
import { todoStore } from "stores/TodoStore";
import { Input, Button } from 'antd';

// import styles from './TodoList.less';

@observer
class TodoList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            title: ""
        }
    }

    render() {
        const { add, count } = todoStore;
        const todoItems = toJS(todoStore.todoItems);
        const { title } = this.state;
        return (
            <div>
                <Input value={title} onChange={(e)=>this.setState({title:e.target.value})}/>
                <Button type="primary" onClick={()=>add(title)}>add</Button>
                <span>{count}</span>
                <ul>{todoItems.map((todo, idx)=><li key={idx}>{todo}</li>)}</ul>
            </div>
        );
    }
}

export default TodoList;
