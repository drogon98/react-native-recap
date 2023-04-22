import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  GestureResponderEvent,
} from "react-native";
import { useAppDispatch, useAppSelector } from "../store";
import { removeTodo, setActiveTodo } from "../store/slices/todos";
import AddEditTodoModal from "../components/AddEditTodoModal";
import { deleteTodo } from "../helpers/services/todos";

const TodoScreen = (props: any) => {
  const todo = useAppSelector((state) => state.todos.activeTodo);
  const dispatch = useAppDispatch();
  const [showEditTodoModal, setShowEditTodoModal] = React.useState(false);

  const handleDeleteTodoPress = async (e: GestureResponderEvent) => {
    try {
      await deleteTodo(todo?.id!);
      dispatch(removeTodo(todo?.id!));
      dispatch(setActiveTodo(null));
      props.navigation.navigate("Dashboard");
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <View style={styles.container}>
      {showEditTodoModal && (
        <AddEditTodoModal
          setShowModal={setShowEditTodoModal}
          showModal={showEditTodoModal}
          action="edit"
        />
      )}
      <Text style={styles.heading}>{todo?.title}</Text>

      <View style={styles.buttonsWrapper}>
        <Button
          title="Edit"
          onPress={() => {
            setShowEditTodoModal(true);
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
