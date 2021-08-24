import axios from 'axios'
import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './ProfilePage.scss'
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
function ProfilePage() {

  const data = [
    {
      name: 'image',
      id: '100'
    },
    {
      name: 'line',
      id: '200'
    },
    {
      name: 'span',
      id: '30'
    },
    {
      name: 'text',
      id: '40'
    },
    {
      name: 'image2',
      id: '50'
    },
    {
      name: 'image3',
      id: '60'
    },
    {
      name: 'image4',
      id: '70'
    },
  ]

  const [blocks, setBlocks] = useState(data)

  const handleOnDragEnd = (result) => {
    if (!result.destination) return
    const items = Array.from(blocks)
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem)

    setBlocks(items)
  }
  return (
    <div className="profile">
      <button onClick={() => { setBlocks([...blocks, { name: blocks.length, id: `${blocks.length}` }]) }}>Добавить блок</button>
      <div className="phone">
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="characters">
            {(provided) => (
              <ul className="characters" {...provided.droppableProps} ref={provided.innerRef}>
                {blocks.map(({ id, name }, index) => {
                  return (
                    <Draggable key={id} draggableId={id} index={index}>
                      {(provided) => (
                        <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                          <p>
                            {name}
                          </p>
                        </li>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </div>

    </div>
  )
}

export default ProfilePage
