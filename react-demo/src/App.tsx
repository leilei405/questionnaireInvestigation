import React from 'react'
// import { useTitle } from 'ahooks'
import './App.css'
import { ClosureTrap } from './components/closureTrap'
// import { useGetInfo } from './hooks/useGetInfo'
// import { useMouse } from './hooks/useMouse'
// import UseStateDemo1 from './components/useStateDemo1'
// import UseStateDemo2 from './components/useStateDemo2'
// import List from './components/useStateList'
// import { Immer } from './components/immer'
// import { UseRefDemo } from './components/useRefDemo'
// import { UseMemoDemo } from './components/useMemoDemo'
// import { UseCallbackDemo } from './components/useCallbackDemo'
// import { useTitle } from './hooks/useTitle'
function App() {
  // useTitle('我爱你')
  // const { x, y } = useMouse()
  // const { loading, info } = useGetInfo()
  // useTitle('Page Title')
  return (
    <div className="App">
      <h1>App Page</h1>
      {/* <UseStateDemo1 /> */}
      {/* <UseStateDemo2 /> */}
      {/* <List /> */}
      {/* <Immer /> */}
      {/* <UseRefDemo /> */}
      {/* <UseMemoDemo /> */}
      {/* <UseCallbackDemo /> */}
      {/* <span>X:{x}--------Y:{y}</span> */}
      {/* <span>{loading ? '加载中' : info}</span> */}
      <ClosureTrap />
    </div>
  )
}

export default App
