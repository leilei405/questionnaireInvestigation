import React, { FC, useState, ChangeEvent, useContext } from 'react'
import { nanoid } from 'nanoid'
// import { initialState } from './store'
import { TodoContext } from './index'
// import { reducer } from './reducer'
export const InputForm: FC = () => {
  const [text, setText] = useState('')
  //   const [state, dispatch] = useReducer(reducer, initialState)
  //   console.log(state, 'state')

  const { state, dispatch } = useContext(TodoContext)

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!text.trim()) return
    const newTodo = {
      id: nanoid(3),
      title: text.trim(),
    }
    dispatch({ type: 'add', payload: newTodo })
    setText('')
  }
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }
  return (
    <div>
      <p>InputForm表单</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="new-todo">what needs to be done?</label>
        <br />
        <input type="text" id="new-todo" onChange={handleChange} value={text} />
        <button type="submit">添加{state.length + 1}</button>
      </form>
    </div>
  )
}
