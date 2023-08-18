import {
  Dispatch,
  FunctionComponent,
  ReactNode,
  createContext,
  useReducer,
  useContext,
} from "react";

interface IAction<TAction, TValue> {
  type: TAction;
  value: TValue;
}

type AddTodo = IAction<"add", string>;
type RemoveTodo = IAction<"complete", number>;

type Actions = AddTodo | RemoveTodo;

interface ITodo {
  content: string;
  completed: boolean;
}

const DEFAULT_STATE: ITodo[] = [];
const localStorageState = localStorage.getItem("todos");
const initialTodos =
  localStorageState !== null ? JSON.parse(localStorageState) : DEFAULT_STATE;

const TodoContext = createContext<[ITodo[], Dispatch<Actions>]>([
  initialTodos,
  () => null,
]);

const todoReducer = (state: ITodo[], action: Actions) => {
  switch (action.type) {
    case "add":
      const updatedState = [
        ...state,
        {
          content: action.value,
          completed: false,
        },
      ];

      localStorage.setItem("todos", JSON.stringify(updatedState));
      return updatedState;
    case "complete":
      state[action.value].completed = true;
      localStorage.setItem("todos", JSON.stringify(state));
      return [...state];
  }
};

export const TodoProvider: FunctionComponent<{ children: ReactNode }> = ({
  children,
}) => {
  const value = useReducer(todoReducer, initialTodos);
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export const useTodo = () => {
  const context = useContext(TodoContext);
  if (context === undefined) {
    throw new Error("useTodo must be used within a TodoProvider");
  }
  return context;
};
