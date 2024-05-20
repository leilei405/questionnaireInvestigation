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
  type: 'questionInput', // 与后端统一好
  Component: QuestionInput, // 画布显示组件
  PropComponent, // 修改属性
  defaultProps: QuestionInputDefaultProps,
}
