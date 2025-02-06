import './App.css'
import { TodoItemProps } from './components/TodoItem'
import TodoList from './components/TodoList'

const todos: Array<TodoItemProps> = [
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

function App() {
  return (
    <>
      <h1 className="text-orange-600">MY BIG TITLE</h1>
      <TodoList todos={todos} />
    </>
  )
}

export default App
