/**
 * @description 段落Paragraph组件
 * @author Amorous
 */

import ComponentParagraph from './Component'
import { QuestionParagraphDefaultProps } from './type'

import PropComponent from './PropComponent'

export * from './type'

// Paragraph 组件配置
export default {
  title: '段落',
  type: 'questionParagraph', // 与后端统一好
  Component: ComponentParagraph, // 画布显示组件
  PropComponent, // 修改属性
  defaultProps: QuestionParagraphDefaultProps,
}
