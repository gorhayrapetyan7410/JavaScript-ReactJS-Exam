import { useState } from 'react'
import './index.css'
import TodoForm from './components/TodoList/TodoForm'
import TodoList from './components/TodoList/TodoList'
import TodoFooter from './components/TodoList/TodoFooter'


function App() {

  const [textInput, setTextInput] = useState("")
  const [todos,setTodos] = useState([
    {
      id: Math.random() * 10,
      text: "Learn Vue",
      isCompleted: false
    },
    {
      id: Math.random() * 10,
      text: "Learn TailwindCss",
      isCompleted: false
    },
    {
      id: Math.random() * 10,
      text: "Learn React",
      isCompleted: false
    }
  ])

  const handleCreateTodo = (e) => {
    e.preventDefault()
    setTodos([
      ...todos,
      {
        id:Math.random() * 10,
        text: textInput,
        isCompleted: false
      }
    ])
    setTextInput("")
  }

  const handleDeleteTodo = (item) => setTodos(todos.filter(todo => todo?.id !== item))

  const handleChecked = (newTodo) => {
    setTodos(todos.map(todo => todo?.id === newTodo?.id ? newTodo : todo))
  }

  const handelClearCompleted = () => setTodos(todos.filter(todo => !todo.isCompleted))
  
  return (
    <div className=" w-screen h-screen flex justify-center items-center bg-gray-800">
      <div className=' w-[600px] overflow-hidden p-3 bg-white rounded-xl shadow-md shadow-black'>
        <TodoForm textInput={textInput} handleCreateTodo={handleCreateTodo} setTextInput={setTextInput}/>
        <TodoList todos={todos} handleDeleteTodo={handleDeleteTodo} handleChecked={handleChecked}/>
        <TodoFooter handelClearCompleted={handelClearCompleted} todos={todos}/>
      </div>
      
    </div>
  )
}

export default App
