import React from 'react';
import {observer} from "mobx-react";
import {userStore} from "stores/UserStore";
import {toJS} from "mobx";
// import styles from './UserList.less';

@observer
class UserList extends React.Component {
    constructor(props, context) {
        super(props, context);
        userStore.getUsers();
    }

    render() {
        const users = toJS(userStore.users);
        return (
            <div>
                <h1>Users</h1>
                {users.map(user => <p key={user.id}>{user.name}</p>)}
            </div>
        );
    }
}

export default UserList;
