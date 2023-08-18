import { useTodo } from "../state/todos";
import classnames from "classnames";

const TodoDisplay = () => {
  const [state, dispatch] = useTodo();

  const createHandleTodoCompleted = (index: number) => (e: any) => {
    dispatch({
      type: "complete",
      value: index,
    });
  };

  return (
    <ul>
      {state.map((todo, index) => {
        const rowClass = classnames("row", { completed: todo.completed });
        return (
          <li className={rowClass}>
            <div className="column">{todo.content}</div>
            {todo.completed !== true && (
              <button
                onClick={createHandleTodoCompleted(index)}
                className="column"
              >
                complete
              </button>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default TodoDisplay;
