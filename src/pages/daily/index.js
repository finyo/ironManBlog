import React, { Component } from 'react'

// 当React元素包含html标签时，如果不设置dangerouslySetInnerHTML属性，就会把html当做字符串处理：


class daily extends Component {
    render() {
        const value = '<h1>Hello World</h1>';
        return (
           <div dangerouslySetInnerHTML={{__html: value}}></div>
        );
    }
}

export default daily