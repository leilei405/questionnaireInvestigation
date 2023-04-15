import React, { useRef, FC } from 'react'

export const UseRefDemo: FC = () => {
  // ts 泛型
  const inputRef = useRef<HTMLInputElement>(null)

  const selectInput = () => {
    // current 当前指向哪个元素
    console.log(inputRef.current, '----ref---')
    const inputElem = inputRef.current
    if (inputElem) inputElem.select() // DOM节点,select DOM操作的API
  }
  return (
    <div>
      <input ref={inputRef} defaultValue="我是useRef" />
      <button onClick={selectInput}>选中input</button>
    </div>
  )
}

// export const UseRefDemo: FC = () => {
//   const nameRef = useRef('我是useRef') // 普通的JS变量
//   const changeName = () => {
//     nameRef.current = '2421412' // 修改ref值,不会触发render
//     console.log(nameRef.current, '----nameRef.current----') // 这里值已经被改变并没有render
//   }
//   return (
//     <div>
//       <p>name: {nameRef.current}</p>
//       <button onClick={changeName}>改变</button>
//     </div>
//   )
// }
