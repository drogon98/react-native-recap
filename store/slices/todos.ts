import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ITodo {
  id: string;
  title: string;
}

interface ITodosState {
  todos: ITodo[];
  activeTodo: ITodo | null;
}

const initialState: ITodosState = {
  todos: [],
  activeTodo: null,
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<ITodo>) => {
      state.todos = [action.payload, ...(state.todos ?? [])];
    },
    setActiveTodo: (state, action: PayloadAction<ITodo | null>) => {
      state.activeTodo = action.payload;
    },
    editTodo: (state, action: PayloadAction<ITodo>) => {
      state.todos = [
        ...state.todos.map((todo) =>
          todo.id === action.payload.id ? action.payload : todo
        ),
      ];
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos = [
        ...(state.todos.filter((todo) => todo.id !== action.payload) ?? []),
      ];
    },
  },
});

export const { addTodo, setActiveTodo, removeTodo, editTodo } =
  todosSlice.actions;

export const todosReducer = todosSlice.reducer;
