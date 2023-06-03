/**
 * @description 输入框组件
 * @author Amorous
 */

import { QuestionInput } from './ComponentsInput'
import { QuestionInputDefaultProps } from './inputType'

export * from './inputType'

export default {
  title: '输入框',
  type: 'questionInput', // 与后端统一好
  QuestionInput,
  defaultProps: QuestionInputDefaultProps,
}
