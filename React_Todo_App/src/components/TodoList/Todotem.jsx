import React from 'react'
import Todo from './TodoList'
import { DeleteIcon } from '../../icons/icons'

function TodoItem({todo, handleDeleteTodo, handleChecked}) {

  return (
    <div className=' w-full h-[50px] flex justify-between items-center'>
      <div className='flex gap-2'>
        <input id={todo?.id} type="checkbox" checked={todo?.isCompleted} onChange={(e) => {
          handleChecked({...todo, isCompleted:e.target.checked })
        }} />
        <label htmlFor={todo?.id}>{todo?.text}</label>
      </div>
      <div>
        <button onClick={() => handleDeleteTodo(todo?.id)} className='text-red-600'><DeleteIcon/></button>
      </div>
    </div>
  )
}

export default TodoItem