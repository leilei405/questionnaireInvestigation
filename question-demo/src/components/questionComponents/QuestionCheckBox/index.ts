/**
 * @description 多选框组件
 * @author Amorous
 */

import { QuestionCheckBox } from './Component'
import { QuestionCheckBoxDefaultProps } from './type'
import { StatComponent } from './StatComponent'
import PropComponent from './PropComponent'
export * from './type'

// CheckBox 组件配置
export default {
  title: '多选框',
  type: 'questionCheckBox', // 与后端统一好
  Component: QuestionCheckBox, // 画布显示组件
  PropComponent, // 修改属性
  defaultProps: QuestionCheckBoxDefaultProps,
  StatComponent, // 柱状统计组件
}
