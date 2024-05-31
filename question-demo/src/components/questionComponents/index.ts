import type { FC } from 'react'
import QuestionInputConfig, { QuestionInputPropsType } from './questionInput'
import QuestionTitleConfig, { QuestionTitlePropsType } from './questionTitle'
import QuestionParagraphConfig, { QuestionParagraphPropsType } from './QuestionParagraph'
import QuestionInfoConfig, { QuestionInfoPropsType } from './QuestionInfo'
import QuestionTextAreaConfig, { QuestionTextAreaPropsType } from './QuestionTextArea'
import QuestionRadioConfig, {
  QuestionRadioPropsType,
  QuestionRadioStatPropsType,
} from './QuestionRadio'
import QuestionCheckBoxConfig, {
  QuestionCheckBoxPropsType,
  QuestionCheckBoxStatPropsType,
} from './QuestionCheckBox'

// 使用交叉类型 合并统一 各个组件的 prop type
export type ComponentPropsType = QuestionTitlePropsType &
  QuestionInputPropsType &
  QuestionParagraphPropsType &
  QuestionInfoPropsType &
  QuestionTextAreaPropsType &
  QuestionRadioPropsType &
  QuestionCheckBoxPropsType

// 统一 各个组件的统计属性类型
type ComponentStatPropsType = QuestionRadioStatPropsType & QuestionCheckBoxStatPropsType

// 统一 各个组件的配置类型
export type ComponentConfType = {
  title: string
  type: string
  Component: FC<ComponentPropsType>
  PropComponent: FC<ComponentPropsType>
  defaultProps: ComponentPropsType
  StatComponent?: FC<ComponentStatPropsType> // 个别组件有统计组件 设置为可选
}

// 全部组件配置的列表
const componentConfigList: ComponentConfType[] = [
  QuestionInputConfig,
  QuestionTitleConfig,
  QuestionParagraphConfig,
  QuestionInfoConfig,
  QuestionTextAreaConfig,
  QuestionRadioConfig,
  QuestionCheckBoxConfig,
]

// 组件分组
export const ComponentGroup = [
  {
    groupId: 'textGroup',
    groupName: '文本显示',
    components: [QuestionTitleConfig, QuestionParagraphConfig, QuestionInfoConfig],
  },
  {
    groupId: 'inputGroup',
    groupName: '用户输入',
    components: [QuestionInputConfig, QuestionTextAreaConfig],
  },
  {
    groupId: 'radioGroup',
    groupName: '用户选择',
    components: [QuestionRadioConfig, QuestionCheckBoxConfig],
  },
]

// 根据类型 判断 返回当前的组件
export function getComponentConfigByType(type: string) {
  return componentConfigList.find(c => c.type === type)
}
