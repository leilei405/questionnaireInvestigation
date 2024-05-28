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
  type: 'questionRadio',
  Component: QuestionRadio,
  PropComponent,
  defaultProps: QuestionRadioDefaultProps,
  StatComponent,
}
