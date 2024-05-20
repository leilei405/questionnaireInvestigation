/**
 * @description 单选框组件
 * @author Amorous
 */

import { QuestionRadio } from './Component'
import { StatComponent } from './StatComponent'
import { QuestionRadioDefaultProps } from './type'
import PropComponent from './PropComponent'
export * from './type'

// Radio 组件配置
export default {
  title: '输入框',
  type: 'questionRadio', // 与后端统一好
  Component: QuestionRadio, // 画布显示组件
  PropComponent, // 修改属性
  defaultProps: QuestionRadioDefaultProps,
  StatComponent,
}
