/**
 * @description title组件
 * @author Amorous
 */

import { QuestionTitle } from './ComponentsTitle'
import { QuestionTitleDefaultProps } from './titleType'

export * from './titleType'

export default {
  title: '标题',
  type: 'questionTitle', // 与后端统一好
  QuestionTitle,
  defaultProps: QuestionTitleDefaultProps,
}
