import React, { useState } from 'react'

function TodoForm({textInput,setTextInput, handleCreateTodo}) {


  return (
    <div>
        <form action="" className=' w-full flex' onSubmit={handleCreateTodo}>
            <input type="text" value={textInput} onChange={(e) => setTextInput(e.target.value)} placeholder='Whta have you panned?' className='h-[35px] w-[70%] border-2 caret-red-600 border-gray-300 outline-0 px-1' />
            <button type='submit' className='h-[35px] w-[70%] bg-lime-500 text-white uppercase font-medium'>Create</button>
        </form>
    </div>
  )
}

export default TodoForm