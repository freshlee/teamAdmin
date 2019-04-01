import React, { Component } from 'react';
import { connect } from 'dva';
import classnames from "classnames";
import styles from './index.less'

class Home extends Component {
    fetchTestData = ()=>{
        console.log("in")
        this.props.dispatch({
            type: 'global/fetchTestData',
            payload: {},
          });
    }
    fetchTestData2 = (params)=>{
        let data = {
            id:params
        }
        this.props.dispatch({
            type: 'global/fetchPostTestData',
            payload: data,
          });
    }
    render() {
        return (
            <div className={classnames(styles.home)}>
              这里是内容实体1
              <div onClick={this.fetchTestData}>按钮一</div>
              <div onClick={()=>{this.fetchTestData2(1)}}>按钮二</div>
            </div>
        )
    }
};

export default connect(({ Home }) => ({
    Home,
  }))(Home);
