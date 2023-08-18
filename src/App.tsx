import "./App.css";
import { TodoProvider } from "./state/todos";
import TodoDisplay from "./components/TodoDisplay";
import AddTodo from "./components/AddTodo";

function App() {
  return (
    <div className="container">
      <TodoProvider>
        <AddTodo />
        <TodoDisplay />
      </TodoProvider>
    </div>
  );
}

export default App;
