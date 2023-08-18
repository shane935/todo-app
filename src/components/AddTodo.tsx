import { useState } from "react";
import { useTodo } from "../state/todos";

const AddTodo = () => {
  const [, dispatch] = useTodo();
  const [todoState, setTodoState] = useState("");

  const handleUpdateTodoInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoState(e.target.value);
  };

  const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todoState.length > 0) {
      dispatch({
        type: "add",
        value: todoState,
      });
      setTodoState("");
    }
  };

  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todo">Add Todo</label>
      <div className="row">
        <div className="column">
          <input
            type="text"
            name="todo"
            id="todo"
            value={todoState}
            onChange={handleUpdateTodoInput}
          />
        </div>
        <div className="column">
          <button>Add</button>
        </div>
      </div>
    </form>
  );
};

export default AddTodo;
