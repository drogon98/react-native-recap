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
    updateActiveTodo: (state, action: PayloadAction<ITodo | null>) => {
      state.activeTodo = action.payload;
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos = [
        ...(state.todos.filter((todo) => todo.id !== action.payload) ?? []),
      ];
    },
  },
});

export const { addTodo, updateActiveTodo, removeTodo } = todosSlice.actions;

export const todosReducer = todosSlice.reducer;
