import { configureStore } from '@reduxjs/toolkit'
import undoable, { excludeAction, StateWithHistory } from 'redux-undo'

import userReducer, { UserStateType } from './userReducer'  // 用户模块
import componentReducer, { ComponentsStateType } from './componentReducer' // 组件模块
import pageInfoReducer, { PageInfoType } from './pageInfoReducer' // 页面信息模块

export type StateType = {
  user: UserStateType
  // 没有增加undo
  // components: ComponentsStateType

  // 增加了undo
  components: StateWithHistory<ComponentsStateType>

  pageInfo: PageInfoType
}

export default configureStore({
  reducer: {
    user: userReducer, // 用户信息
    // 没有undo
    // components: componentReducer, // 组件列表

    // 添加undo
    components: undoable(componentReducer, {
      limit: 20,
      filter: excludeAction([
        'components/resetComponents',
        'components/changeSelectId',
        'components/selectPrevComponent',
        'components/selectNextComponent',
      ]),
    }), // 组件列表

    pageInfo: pageInfoReducer, // 页面信息
  },
})
