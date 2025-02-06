import './App.css'
import TodoItem from './components/TodoItem'

function App() {
  return (
    <>
      <h1 className="text-orange-600">MY BIG TITLE</h1>
      <TodoItem
        text="Learn React"
        id={1}
        completed={false}
        onToggle={() => {}}
        onDelete={() => {}}
      />
    </>
  )
}

export default App
