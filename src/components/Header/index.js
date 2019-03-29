import React, { Component } from 'react';
import classnames from "classnames";
import styles from './index.less'

class BaseLayout extends Component {
    render() {
        return (
            <div className={classnames(styles.header)}>
              这里是顶部导航栏
            </div>
        )
    }
};

export default BaseLayout;
