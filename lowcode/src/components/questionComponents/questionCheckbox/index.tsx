import React, { FC, useEffect, useState } from 'react'
import styles from './index.module.scss'
import { PropsType } from './types'

const QuestionCheckbox: FC<PropsType> = ({ fe_id, props }) => {
  const { title, isVertical, list = [] } = props

  const [selectValues, setSelectValues] = useState<string[]>([])

  // 初始化选中状态
  useEffect(() => {
    list.forEach(item => {
      if (item.checked) {
        setSelectValues(state => [...state, item.value])
      }
    })
  }, [list])

  /**
   * 切换选中状态
   * @param value 字符串类型的值
   * @returns 无返回值
   */
  const toggleChecked = (value: string) => {
    if (selectValues.includes(value)) {
      // 已经选择
      setSelectValues(state => state.filter(item => item !== value))
    } else {
      // 未选择
      setSelectValues(state => [...state, value])
    }
  }

  return (
    <>
      <p>{title}</p>
      {/* 添加一个隐藏域来存多选框的值 */}
      <input type="hidden" name={fe_id} value={selectValues.toString()} />
      <ul className={styles.list}>
        {list.map(item => {
          // const { value, text, checked } = item
          const { value, text } = item

          // 判断横向竖向样式
          let lisClassName
          if (isVertical) {
            lisClassName = styles.verticalItem
          } else {
            lisClassName = styles.horizontalItem
          }

          return (
            <li key={value} className={lisClassName}>
              <label>
                <input
                  type="checkbox"
                  checked={selectValues.includes(value)}
                  onChange={() => toggleChecked(value)}
                />
                {text}
              </label>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default QuestionCheckbox
