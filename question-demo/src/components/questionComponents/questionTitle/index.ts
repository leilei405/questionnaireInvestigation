/**
 * @description title组件
 * @author Amorous
 */

import { QuestionTitle } from './Components'
import { QuestionTitleDefaultProps } from './type'
import PropComponent from './PropComponent'
export * from './type'

// Title 的组件配置
export default {
  title: '标题',
  type: 'questionTitle', // 与后端统一好
  Component: QuestionTitle,
  PropComponent,
  defaultProps: QuestionTitleDefaultProps,
}
