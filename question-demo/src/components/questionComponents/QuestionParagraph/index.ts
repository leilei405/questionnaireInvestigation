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
  type: 'questionParagraph',
  Component: ComponentParagraph,
  PropComponent,
  defaultProps: QuestionParagraphDefaultProps,
}
