import type { FC } from 'react'
import QuestionInputConfig, { QuestionInputPropsType } from './questionInput'
import QuestionTitleConfig, { QuestionTitlePropsType } from './questionTitle'

// 统一 各个组件的 prop type
// & 交叉
// | 联合
export type ComponentPropsType = QuestionTitlePropsType & QuestionInputPropsType

// 统一定义  组件的配置
export type ComponentConfType = {
  title: string
  type: string
  Component: FC<ComponentPropsType>
  PropComponent: FC<ComponentPropsType>
  defaultProps: ComponentPropsType
}

// 全部组件配置的列表
const componentConfigList: ComponentConfType[] = [QuestionInputConfig, QuestionTitleConfig]

// 组件分组
export const ComponentGroup = [
  {
    groupId: 'text',
    groupName: '文本显示',
    components: [QuestionTitleConfig],
  },
  {
    groupId: 'input',
    groupName: '用户输入',
    components: [QuestionInputConfig],
  },
]

// 根据类型 判断 返回当前的组件
export function getComponentConfigByType(type: string) {
  return componentConfigList.find(c => c.type === type)
}
