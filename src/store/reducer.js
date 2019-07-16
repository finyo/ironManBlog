import { combineReducers } from 'redux' //combineReducers是redux中的一个API，用于连接多个reducer
import { reducer as headerReducer} from '../common/header/store';
import { reducer as homeReducer} from '../pages/home/store';

const reducer = combineReducers({
    header: headerReducer,
    home: homeReducer
})
export default reducer

// 拆分之后再使用state中的数据就不能直接：this.state了，需要这样写：this.state.header.xxx，即需要指明: 是state下哪个块的数据。