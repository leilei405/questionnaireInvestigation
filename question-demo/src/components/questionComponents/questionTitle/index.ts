/**
 * @description title组件
 * @author Amorous
 */

import { QuestionTitle } from './Components'
import { QuestionTitleDefaultProps } from './type'
import PropComponent from './PropComponent'
export * from './type'

export default {
  title: '标题',
  type: 'questionTitle',
  Component: QuestionTitle,
  PropComponent,
  defaultProps: QuestionTitleDefaultProps,
}
