import React, { FC, useMemo, useState } from 'react'

export const UseMemoDemo: FC = () => {
  console.log('render')
  const [num1, setNum1] = useState(10)
  const [num2, setNum2] = useState(20)
  const [num3, setNum3] = useState(30)
  const [str, setStr] = useState('我是useMemo')
  const sum = useMemo(() => {
    console.log('sum------') // 缓存
    return num1 + num2 + num3
  }, [num1, num2, num3])

  return (
    <div>
      <h1>UseMemoDemo</h1>
      <p>{sum}</p>
      <p>
        {num1} &nbsp;&nbsp;&nbsp;<button onClick={() => setNum1(num1 + 1)}>Add Num1</button>
      </p>
      <p>
        {num2} &nbsp;&nbsp;&nbsp;<button onClick={() => setNum2(num2 + 1)}>Add Num2</button>
      </p>
      <p>
        {num3} &nbsp;&nbsp;&nbsp;<button onClick={() => setNum3(num3 + 1)}>Add Num3</button>
      </p>
      <p>
        <input value={str} onChange={e => setStr(e.target.value)} />
      </p>
    </div>
  )
}
