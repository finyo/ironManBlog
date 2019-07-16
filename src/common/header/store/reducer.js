import * as constants from './actionType'
import { fromJS } from 'immutable'
// 可用于保护state，state是不允许修改的，为了防止误修改，可以借助immutable库

const defaultState = fromJS({
     //immutable中的fromJS方法将state数据保护起来
    focused: false
});
// 之后如果要使用或者更改（注意：这里说的更改并不是真正的修改）state就要使用immutable提供的set和get方法:
//如果要同时更改多个state，有两种方法：
//1、
    // this.state.set().set().set()...

//2、
    // this.state.merge({
    //   value: 'hello',
    //   list: ["hello", "world"]
    // });
    
// 这里说明一下为什么用immutable设置state为不可修改之后还能更改state。
// set的原理是这样的： 根据以前的state和传入的数据，返回一个新的state。这样修改state的目的实现了，但实际state并没有修改。所以，使用immutable不仅保护了state，而且又可以愉快的修改了~
export default ( state = defaultState, action) => {
    if (action.type === constants.SEARCH_FOCUS) {
        return state.set('focused', true)
    } else if (action.type === constants.SEARCH_BLUR) {
        return state.set('focused', false)       
    }
    return state
}