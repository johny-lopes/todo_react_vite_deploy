import React from 'react'

const Todo = ({ todoItem, removeTodo, completeTodo }: any) => {
  return (
    <div className='todo' style={{ textDecoration: todoItem.isCompleted ? "line-through" : "", backgroundColor: todoItem.isCompleted ? "#f7f7f2dc" : ""}}>
      <div className='content'>
        <p>{todoItem.text}</p>
        <p className='category'>({todoItem.category})</p>
      </div>
      <div>
        <button className='complete' onClick={() => completeTodo(todoItem.id)}>{ !todoItem.isCompleted ? "Completar" : "Reativar" }</button>
        <button className='remove' onClick={() => removeTodo(todoItem.id)}>X</button>
      </div>
    </div>
  )
}

export default Todo