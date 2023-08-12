export type OptionType = {
  value: string
  text: string
  checked: boolean
}

export type QuestionCheckBoxPropsType = {
  title?: string
  isVertical?: boolean
  list?: OptionType[] // 初始配置

  onChange?: (newProps: QuestionCheckBoxPropsType) => void
  disabled?: boolean
}

export const QuestionCheckBoxDefaultProps: QuestionCheckBoxPropsType = {
  title: '多选标题',
  isVertical: false,
  list: [
    { value: 'item1', text: '选项1', checked: false },
    { value: 'item2', text: '选项2', checked: false },
    { value: 'item3', text: '选项3', checked: false },
  ],
}
