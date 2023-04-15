import { useCallback, useEffect, useState } from 'react'

export const useMouse = () => {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const mouseMoveHandler = useCallback((event: MouseEvent) => {
    setX(event.clientX)
    setY(event.clientY)
  }, [])

  useEffect(() => {
    // mousemove  监听鼠标事件
    window.addEventListener('mousemove', mouseMoveHandler)

    // 组件销毁时,解绑DOM事件  可能会出现组件内存泄露问题
    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler)
    }
  }, [])
  return {
    x,
    y,
  }
}
