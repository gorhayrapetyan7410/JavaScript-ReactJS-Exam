// import { useState } from 'react'
// import './index.css'
// import Todo from './components/TodoList/TodoList'
// import TodoForm from './components/TodoList/TodoForm'
// import TodoFooter from './components/TodoList/TodoFooter'
// import TodoItem from './components/TodoList/TodoItem'

// function App() {
//   const [todos, setTodos] = useState([
//     {
//       id: Math.random(),
//       text: "Learn Css",
//       isCompleated: false,
//     },
//     {
//       id: Math.random(),
//       text: "Learn Html",
//       isCompleated: false,
//     },
//     {
//       id: Math.random(),
//       text: "Learn Js",
//       isCompleated: false,
//     },
//     {
//       id: Math.random(),
//       text: "Learn React",
//       isCompleated: false,
//     }
//   ])

//   const onAdd = (elem) => {
//     setTodos([
//       ...todos,
//       {
//         id: Math.random(),
//         text: elem,
//         isCompleated: false
//       }
//     ])
//   }

//   const onClearCompleated = () => {
//     setTodos(todos.filter((todo) => !todo.isCompleated))
//   }

//   const onDelete = (todo) => {
//     setTodos(todos.filter((t) => t.id !== todo.id))
//   }

//   const onChange = (newTodo) => {
//     setTodos(todos.map(item => {
//       if (item.id === newTodo.id) {
//         return newTodo
//       }
//       return item
//     }))
//   }

//   return (
//     <div className=" w-96 flex justify-center flex-col items-center">
//       <TodoForm  onAdd={onAdd}/>
//       <Todo todos={todos} onDelete={onDelete} onChange={onChange} />
//       <TodoFooter todos={todos} onClearCompleated={onClearCompleated}/>
//     </div>
//   )
// }

// export default App
