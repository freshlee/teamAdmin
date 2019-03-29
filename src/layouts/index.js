import React, { Component } from 'react';
import Header from '@/components/Header'
class BaseLayout extends Component {
    render() {
        return (
            <div>
                {/* 全局IM模块 浮层显示 */}
                {/* 顶部导航栏 */}
                <Header/>
                {/* 内容主体 */}
                { this.props.children }
                {/* 页面底部 */}
            </div>
        )
    }
};

export default BaseLayout;
