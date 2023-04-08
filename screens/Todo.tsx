import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  GestureResponderEvent,
} from "react-native";
import { useAppDispatch, useAppSelector } from "../store";
import { removeTodo, updateActiveTodo } from "../store/slices/todos";

const TodoScreen = (props: any) => {
  const todo = useAppSelector((state) => state.todos.activeTodo);
  const dispatch = useAppDispatch();

  const handleDeleteTodoPress = (e: GestureResponderEvent) => {
    dispatch(removeTodo(todo?.id ?? ""));
    dispatch(updateActiveTodo(null));
    props.navigation.navigate("Dashboard");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{todo?.title}</Text>

      <View style={styles.buttonsWrapper}>
        <Button
          title="Edit"
          onPress={() => {
            //
          }}
        />
        <Button title="Delete" onPress={handleDeleteTodoPress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 12,
  },

  heading: {
    fontWeight: "bold",
    fontSize: 50,
  },

  buttonsWrapper: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    width: 300,
  },
});

export default TodoScreen;
