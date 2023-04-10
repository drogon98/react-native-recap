import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  GestureResponderEvent,
  FlatList,
  ScrollView,
  Pressable,
} from "react-native";
import { useAppDispatch, useAppSelector } from "../store";
import AddEditTodoModal from "../components/AddEditTodoModal";
import { ITodo, setActiveTodo } from "../store/slices/todos";

const DashboardScreen = (props: any) => {
  const dispatch = useAppDispatch();
  const todos = useAppSelector((state) => state.todos.todos);
  const [showAddTodoModal, setShowAddTodoModal] = React.useState(false);

  const handleAddTodoPress = (e: GestureResponderEvent) => {
    setShowAddTodoModal(true);
  };

  const handleTodoPress = (e: GestureResponderEvent, todo: ITodo) => {
    dispatch(setActiveTodo(todo));
    props.navigation.navigate("Todo");
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Todos</Text>

      <Button title="Add Todo" onPress={handleAddTodoPress} />

      {showAddTodoModal && (
        <AddEditTodoModal
          setShowModal={setShowAddTodoModal}
          showModal={showAddTodoModal}
          action="add"
        />
      )}

      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <Pressable
            style={styles.item}
            onPress={(e) => handleTodoPress(e, item)}
          >
            <Text style={styles.title}>{item.title}</Text>
          </Pressable>
        )}
        keyExtractor={(item) => item.id}
      />
    </ScrollView>
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

  item: {
    backgroundColor: "#ccc",
    padding: 20,
    marginVertical: 8,
    // marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default DashboardScreen;
