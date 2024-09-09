'use client'

import { Checkbox } from '@/components/ui/checkbox'

type Props = {
  todoList: Todo[]
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>
}

const CheckboxComponent = ({ todoList, setTodoList }: Props) => {
  const toggleTodo = (id: number) => {
    const newTodoList = todoList.map((todo) => todo.id === id ? ({ ...todo, completed: !todo.completed }) : todo)
    setTodoList(newTodoList)
  }
  return (
    <div className='flex flex-col space-y-4 p-3'>
      <h3 className='font-bold text-xl mb-3 text-[#071952]'>Pending Tasks</h3>
      {todoList.map((todo) => (
        <div key={todo.id} className="flex items-center space-x-2">
          <Checkbox id={`todo-${todo.id}`} checked={todo.completed} onChange={() => toggleTodo(todo.id)} />
          <div className="grid gap-1 5 leading-none">
            <label htmlFor={`todo-${todo.id}`}
              className={`text-sm ${todo.completed && "line-through"
                } text-muted-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70`}>
              {todo.text}
            </label>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CheckboxComponent