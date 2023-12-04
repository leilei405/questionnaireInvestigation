import React, { FC } from 'react'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

type PropsType = {
  title: string
  id: string
}

const SortableItem: FC<PropsType> = (props: PropsType) => {
  const { title, id } = props
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    border: '1px solid red',
    margin: '10px',
    padding: '10px',
    background: 'aqua',
  }

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      Item {id} ==== {title}
    </div>
  )
}

export default SortableItem
