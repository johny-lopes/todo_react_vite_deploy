import { useState } from 'react'

const TodoForm = ({ addTodo } : any) => {
  const [value, setValue] = useState("")
  const [category, setCategory] = useState("")

  const handleSubmit = (e: any) => {
    e.preventDefault()
    addTodo(value, category)
    setValue("")
    setCategory("")
  }

  return (
    <div className="todo-form">
      <h2>Criar tarefa:</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={value}
          placeholder="Digite o titulo"
          onChange={(e) => setValue(e.target.value)}
        />
        <select onChange={(e) => setCategory(e.target.value)} value={category}>
          <option value="">Selecione uma Categoria</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Estudos">Estudos</option>
        </select>
        <button type="submit">Criar Tarefa</button>
      </form>
    </div>
  )
}

export default TodoForm