import React, { FC, useState, useCallback } from 'react'

export const UseCallbackDemo: FC = () => {
  const [text, setText] = useState('useCallback')
  const fn1 = () => console.log('fn1 useCallback', text)
  // useCallback 就是 useMemo 的语法糖，和 useMemo 一样
  const fn2 = useCallback(() => {
    console.log('fn2 useCallback', text)
  }, [text])
  return (
    <div>
      <h1>UseCallbackDemo</h1>
      <button onClick={fn1}>FN1</button>
      <button onClick={fn2}>FN2</button>
      <input value={text} onChange={e => setText(e.target.value)} />
    </div>
  )
}
