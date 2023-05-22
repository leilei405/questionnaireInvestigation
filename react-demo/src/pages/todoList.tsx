import React, { FC } from 'react'
import { nanoid } from 'nanoid'
// useSelector 查询  useDispatch 派发
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, removeTodo, toggleCompleted, TodoItemType } from '../store/TodoList'
import type { StateType } from '../store'
const TodoList: FC = () => {
  const list = useSelector<StateType>(state => state.todoList) as TodoItemType[]
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

  return (
    <div>
      <h2>Redux TodoList Demo</h2>
      <button onClick={add}>添加</button>
      {list.map(item => {
        const { id, title, computed } = item
        return (
          <li key={id} style={{ textDecoration: computed ? 'line-through' : '' }}>
            <span onClick={() => toggle(id)}>{title}</span>&nbsp;
            <button onClick={() => del(id)}>删除</button>
          </li>
        )
      })}
    </div>
  )
}

export default TodoList
