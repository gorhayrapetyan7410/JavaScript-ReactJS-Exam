import React from 'react'
import TodoItem from './Todotem'

function Todo({todos,handleDeleteTodo, handleChecked}) {

  if (todos.length === 0) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <p className='text-xl text-gray-500'>No todos yet...</p>
      </div>
    )
  }
  return (
    <div className='w-full h-[200px] overflow-y-auto'>
      <div>
        {
          todos?.map(todo => {
            return <TodoItem key={todo?.id} todo={todo} handleChecked={handleChecked} handleDeleteTodo={handleDeleteTodo}/>
          })
        }
      </div>
    </div>
  )
}

export default Todo