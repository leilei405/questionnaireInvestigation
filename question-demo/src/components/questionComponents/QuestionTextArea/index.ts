/**
 * @description 多行输入框组件
 * @author Amorous
 */

import { QuestionTextArea } from './Component'
import { QuestionTextAreaDefaultProps } from './type'
import PropComponent from './PropComponent'
export * from './type'

// TextArea 组件配置
export default {
  title: '多行输入',
  type: 'questionTextArea',
  Component: QuestionTextArea,
  PropComponent,
  defaultProps: QuestionTextAreaDefaultProps,
}
