/**
 * @description 问卷Info组件整合
 * @author Amorous
 */

import { QuestionInfo } from './Component'
import { QuestionInfoDefaultProps } from './type'
import PropComponent from './PropComponent'
export * from './type'

// Info 组件配置
export default {
  title: '问卷信息',
  type: 'questionInfo', // 与后端统一好
  Component: QuestionInfo, // 画布显示组件
  PropComponent, // 修改属性
  defaultProps: QuestionInfoDefaultProps,
}
