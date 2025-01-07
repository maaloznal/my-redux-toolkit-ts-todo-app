import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../app/ToolkitStore";
import {
  addTask,
  toggleTask,
  removeTask,
  setFilter,
} from "../../toolkit/TodoSlice";

export const TodosToolkit: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);
  const filter = useSelector((state: RootState) => state.todos.filter);
  const dispatch: AppDispatch = useDispatch();
  const [text, setText] = useState("");

  const handleAddTodo = () => {
    if (text.trim()) {
      dispatch(addTask({ id: Date.now(), text, completed: false }));
      setText("");
    }
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "incomplete") return !todo.completed;
    return true;
  });

  return (
    <div className="todos-container">
      <h1>Список задач</h1>
      <div className="todos-input">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Введите задачу..."
        />
        <button onClick={handleAddTodo}>Добавить задачу</button>
      </div>

      <div className="filter-buttons">
        <button onClick={() => dispatch(setFilter("all"))}>Все</button>
        <button onClick={() => dispatch(setFilter("completed"))}>
          Выполненные
        </button>
        <button onClick={() => dispatch(setFilter("incomplete"))}>
          Невыполненные
        </button>
      </div>

      <ul className="todos-list">
        {filteredTodos.map((todo) => (
          <li key={todo.id}>
            <span
              className={todo.completed ? "completed" : ""}
              onClick={() => dispatch(toggleTask(todo.id))}
            >
              {todo.text}
            </span>
            <button onClick={() => dispatch(removeTask(todo.id))}>
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodosToolkit;
