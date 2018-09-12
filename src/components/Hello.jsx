import React from 'react';
import {observer} from "mobx-react";

// import styles from './Hello.less';

@observer
class Hello extends React.Component {
    render() {
        return (
            <div>
                Hello
            </div>
        );
    }
}

export default Hello;

