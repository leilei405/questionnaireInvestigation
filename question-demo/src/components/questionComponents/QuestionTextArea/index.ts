/**
 * @description 多行输入框组件
 * @author Amorous
 */

import { QuestionTextArea } from './ComponentTextArea'
import { QuestionTextAreaDefaultProps } from './textAreaType'
import PropComponent from './PropComponent'
export * from './textAreaType'

// TextArea 组件配置
export default {
  title: '多行输入',
  type: 'questionTextArea', // 与后端统一好
  Component: QuestionTextArea, // 画布显示组件
  PropComponent, // 修改属性
  defaultProps: QuestionTextAreaDefaultProps,
}
