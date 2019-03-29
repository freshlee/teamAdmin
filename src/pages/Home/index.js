import React, { Component } from 'react';
import classnames from "classnames";
import styles from './index.less'

class Home extends Component {
    render() {
        return (
            <div className={classnames(styles.home)}>
              这里是内容实体
            </div>
        )
    }
};

export default Home;
