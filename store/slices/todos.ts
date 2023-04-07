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
  },
});

export const { addTodo } = todosSlice.actions;

export const todosReducer = todosSlice.reducer;
