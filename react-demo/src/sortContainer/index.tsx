import React, { useState } from 'react'
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from '@dnd-kit/core'
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable'

import SortableItem from './Items'
type PropsMock = {
  fe_id: string
  title: string
}
function Container() {
  // const [items, setItems] = useState(['a', 'b', 'c'])
  const [items, setItems] = useState<PropsMock[]>([
    { fe_id: 'c1', title: '組件1' },
    { fe_id: 'c2', title: '組件2' },
    { fe_id: 'c3', title: '組件3' },
  ])
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event
    if (over == null) return
    if (active.id !== over.id) {
      setItems(items => {
        // const oldIndex = items.indexOf(active.id.toString())
        const oldIndex = items.findIndex(c => c.fe_id === active.id)
        // const newIndex = items.indexOf(over?.id.toString())
        const newIndex = items.findIndex(c => c.fe_id === over.id)
        console.log(oldIndex, newIndex, '=======')

        return arrayMove(items, oldIndex, newIndex)
      })
    }
  }

  const itemsWidthId = items.map(c => {
    return {
      ...c,
      id: c.fe_id, // dnd-kit 需要id属性支持
    }
  })

  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={itemsWidthId} strategy={verticalListSortingStrategy}>
        {itemsWidthId.map(c => (
          <SortableItem key={c.id} id={c.id} title={c.title} />
        ))}
      </SortableContext>
    </DndContext>
  )
}

export default Container
