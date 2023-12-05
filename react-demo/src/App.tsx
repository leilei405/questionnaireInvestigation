import React from 'react'
import './App.css'
// import { useTitle } from 'ahooks'
// import { TodoListReducer } from './TodoReducer'
// import { StyledComponentsDemo } from './components/styledComponentsDemo'
// import { ClosureTrap } from './components/closureTrap'
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
// import { Demo } from './ContextDemo/index'
// import { ReducerDemo } from './CountReducer/reducer'
// import Count from './pages/countPage'
import TodoList from './pages/todoList'
// import RadioDemo from './Radio'
// import DateDemo from './DateComponent'
// import SlateCom from './SlateV1/index'
// import { SlateCom } from './SlateV2/index'
import Container from './sortContainer'
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
      {/* <ClosureTrap /> */}
      {/* <StyledComponentsDemo /> */}
      {/* <Demo /> */}
      {/* <ReducerDemo /> */}
      {/* <TodoListReducer /> */}
      {/* <Count /> */}
      <TodoList />
      {/* <RadioDemo /> */}
      {/* <DateDemo /> */}
      {/* <SlateCom /> */}
      {/* <Container /> */}
    </div>
  )
}

export default App
