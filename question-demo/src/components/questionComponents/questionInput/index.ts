/**
 * @description 输入框组件
 * @author Amorous
 */

import { QuestionInput } from './ComponentsInput'
import { QuestionInputDefaultProps } from './inputType'
import PropComponent from './PropComponent'
export * from './inputType'

// Input 组件配置
export default {
  title: '输入框',
  type: 'questionInput', // 与后端统一好
  Component: QuestionInput, // 画布显示组件
  PropComponent, // 修改属性
  defaultProps: QuestionInputDefaultProps,
}
