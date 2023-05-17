import React, { useState } from "react";

function TodoFooter({ todos, handelClearCompleted }) {
  const compleatedLength = todos.filter((todo) => todo.isCompleted).length;

  return (
    <div className=" w-full h-[50px] flex justify-between items-center">
      <div className="flex gap-2">
        <span>
          {compleatedLength}/{todos.length}
        </span>
        <span>Completed</span>
      </div>
      <div>
        <button
          onClick={handelClearCompleted}
          className=" py-1  px-4 bg-red-500 text-white rounded-md"
        >
          Clear Completed
        </button>
      </div>
    </div>
  );
}

export default TodoFooter;
