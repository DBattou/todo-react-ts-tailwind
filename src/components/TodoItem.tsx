import React from 'react'

const TodoItem: React.FC<{
  text: string
  id: number
  completed: boolean
  onToggle: (id: number) => void
  onDelete: (id: number) => void
}> = ({ text, id, completed, onToggle, onDelete }) => {
  return (
    <div className="flex items-center justify-between p-4 border-b bg-green-500/5">
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          onClick={() => onToggle(id)}
          checked={completed}
          readOnly
        />
        <span
          className={`text-lg ${
            completed ? 'line-through text-gray-500' : 'text-grey-9000'
          }`}
        >
          {text}
        </span>
      </div>
      <button onClick={() => onDelete(id)} className="text-red-500 hover:text-red-700">
        Supprimer
      </button>
    </div>
  )
}

export default TodoItem
