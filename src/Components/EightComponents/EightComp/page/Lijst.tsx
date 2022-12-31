import { useState } from "react";
import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";
import {TodoItem} from "../types"

const Lijst = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const addTodo = (todo: string) => {
    setTodos([...todos, { name: todo, completed: false }]);
  };
  const markCompleted = (index: number, completed: boolean) => {
    setTodos(todos.map((todo, i) => i === index ? { ...todo, completed: completed } : todo));
  };

  return (
    <div>
      <TodoInput addTodo={addTodo}/>
      <TodoList todos = {todos} markCompleted = {markCompleted}/>
    </div>
  );
}

export default Lijst