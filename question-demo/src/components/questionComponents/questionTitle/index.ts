/**
 * @description title组件
 * @author Amorous
 */

import { QuestionTitle } from './ComponentsTitle'
import { QuestionTitleDefaultProps } from './titleType'

export * from './titleType'

// Title 的组件配置
export default {
  title: '标题',
  type: 'questionTitle', // 与后端统一好
  Component: QuestionTitle,
  defaultProps: QuestionTitleDefaultProps,
}
