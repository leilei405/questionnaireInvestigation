/**
 * @description 多选框组件
 * @author Amorous
 */

import { QuestionCheckBox } from './ComponentCheckBox'
import { QuestionCheckBoxDefaultProps } from './checkType'
import PropComponent from './PropComponent'
export * from './checkType'

// CheckBox 组件配置
export default {
  title: '多选框',
  type: 'questionCheckBox', // 与后端统一好
  Component: QuestionCheckBox, // 画布显示组件
  PropComponent, // 修改属性
  defaultProps: QuestionCheckBoxDefaultProps,
}
