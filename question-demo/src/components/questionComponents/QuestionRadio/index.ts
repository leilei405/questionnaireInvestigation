/**
 * @description 单选框组件
 * @author Amorous
 */

import { QuestionRadio } from './ComponentRadio'
import { QuestionRadioDefaultProps } from './radioType'
import PropComponent from './PropComponent'
export * from './radioType'

// Radio 组件配置
export default {
  title: '输入框',
  type: 'questionRadio', // 与后端统一好
  Component: QuestionRadio, // 画布显示组件
  PropComponent, // 修改属性
  defaultProps: QuestionRadioDefaultProps,
}
