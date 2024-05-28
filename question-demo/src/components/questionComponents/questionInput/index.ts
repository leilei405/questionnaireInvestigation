/**
 * @description 输入框组件
 * @author Amorous
 */

import { QuestionInput } from './Component'
import { QuestionInputDefaultProps } from './type'
import PropComponent from './PropComponent'
export * from './type'

// Input 组件配置
export default {
  title: '输入框',
  type: 'questionInput',
  Component: QuestionInput,
  PropComponent,
  defaultProps: QuestionInputDefaultProps,
}
