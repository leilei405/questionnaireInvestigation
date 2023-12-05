import React, { FC } from 'react'
import { nanoid } from 'nanoid'
// useSelector 查询  useDispatch 派发
import { useSelector, useDispatch } from 'react-redux'
import { ActionCreators } from 'redux-undo'
import { addTodo, removeTodo, toggleCompleted, TodoItemType } from '../store/TodoList'
import type { StateType } from '../store'
const TodoList: FC = () => {
  // 从redux store 中获取todoList
  const list = useSelector<StateType>(state => state.todoList.present) as TodoItemType[]
  console.log(list)

  const dispatch = useDispatch()

  const del = (id: string) => {
    dispatch(removeTodo({ id }))
  }

  const toggle = (id: string) => {
    dispatch(toggleCompleted({ id }))
  }

  const add = () => {
    const id = nanoid(3)
    const newTodo = {
      id,
      title: `todo ${id}`,
      computed: false,
    }
    dispatch(addTodo(newTodo))
  }

  const onUndo = () => {
    dispatch(ActionCreators.undo())
  }
  const onRedo = () => {
    dispatch(ActionCreators.redo())
  }

  return (
    <div>
      <h2>Redux TodoList Demo</h2>
      <button onClick={add}>添加</button>
      <ul>
        {list.map(item => {
          const { id, title, computed } = item
          return (
            <li key={id} style={{ textDecoration: computed ? 'line-through' : '' }}>
              <span onClick={() => toggle(id)}>{title}</span>&nbsp;
              <button onClick={() => del(id)}>删除</button>
            </li>
          )
        })}
      </ul>
      <button onClick={onUndo}>undo</button>
      <button onClick={onRedo}>redo</button>
    </div>
  )
}

export default TodoList
