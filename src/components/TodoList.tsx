import React, { useEffect, useState } from 'react'
import TodoItem, { TodoItemProps } from './TodoItem'

interface TodoListProps {
  todos: Array<TodoItemProps>
}

const todosInitialValue: Array<TodoItemProps> = [
  {
    id: 1,
    text: 'Learn React',
    completed: false,
    onToggle: () => {},
    onDelete: () => {},
  },
  {
    id: 2,
    text: 'Learn TypeScript',
    completed: false,
    onToggle: () => {},
    onDelete: () => {},
  },
]

const TodoList: React.FC<TodoListProps> = () => {
  const [todos, setTodos] = useState<TodoItemProps[]>(() => {
    return JSON.parse(localStorage.getItem('todos') || 'null') || todosInitialValue
  })

  const [newTodo, setNewTodo] = useState('')

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addTodo = () => {
    if (newTodo.trim() === '') return

    setTodos((prevTodos) => [
      ...prevTodos,
      {
        id: Math.random(),
        text: newTodo,
        completed: false,
        onToggle: () => {},
        onDelete: () => {},
      },
    ])
    setNewTodo('')
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <div className="flex space-x-2 mb-4">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="flex-1 p-2 border rounded"
          placeholder="Ajouter une tâche"
        />
        <button
          onClick={addTodo}
          className={`px-4 py-2 bg-blue-500 text-white rounded ${
            newTodo.trim() === ''
              ? 'opacity-50 cursor-default hover:bg-blue-500'
              : 'hover:bg-blue-600'
          }`}
        >
          Ajouter
        </button>
      </div>

      <div>
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </div>
    </div>
  )
}

export default TodoList
