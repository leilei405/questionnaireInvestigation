import React, { FC, CSSProperties } from 'react'

type PropsType = {
  text: string
  isCenter?: boolean
}

const questionParagraph: FC<PropsType> = ({ text, isCenter }) => {
  const style: CSSProperties = {}

  if (isCenter) style.textAlign = 'center'

  // 换行
  const textArr = text.split('\n')

  return (
    <p>
      {textArr.map((item, index) => {
        return (
          <span key={index}>
            {index > 0 && <br />}
            {item}
          </span>
        )
      })}
    </p>
  )
}

export default questionParagraph
