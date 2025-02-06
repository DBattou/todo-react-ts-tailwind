import React from 'react'

const TodoItem: React.FC<{
  text: string
  id: number
  completed: boolean
  onToggle: (id: number) => void
  onDelete: (id: number) => void
}> = ({ text, id, completed, onToggle, onDelete }) => {
  return (
    <div>
      <input
        type="checkbox"
        onClick={() => onToggle(todo.id)}
        checked={todo.done}
        readOnly
      />
      <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
      <button onClick={() => onDelete(todo.id)}>삭제</button>
    </div>
  )
}

export default TodoItem
