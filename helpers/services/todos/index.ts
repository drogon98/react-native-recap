import { ITodo } from "../../../store/slices/todos";
import { nativeAxios } from "../../axios";

export const getTodos = async (): Promise<ITodo[] | undefined> => {
  const response = await nativeAxios.get("todos");
  return response.data;
};

export const _addTodo = async (input: ITodo): Promise<ITodo | undefined> => {
  const response = await nativeAxios.post("posts", input);
  return response.data;
};

export const updateTodo = async (id: number, input: ITodo) => {
  await nativeAxios.put(`todos/${id}`, input);
};

export const deleteTodo = async (id: number) => {
  await nativeAxios.delete(`todos/${id}`);
};
