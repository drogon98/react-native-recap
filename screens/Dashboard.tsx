import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  GestureResponderEvent,
  FlatList,
} from "react-native";
import { useAppDispatch, useAppSelector } from "../store";
import AddTodoModal from "../components/AddTodoModal";

const DashboardScreen = () => {
  const dispatch = useAppDispatch();
  const todos = useAppSelector((state) => state.todos.todos);
  const [showAddTodoModal, setShowAddTodoModal] = React.useState(false);

  console.log("todos", todos);

  const handleAddTodoPress = (e: GestureResponderEvent) => {
    setShowAddTodoModal(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Todos</Text>

      <Button title="Add Todo" onPress={handleAddTodoPress} />

      {showAddTodoModal && (
        <AddTodoModal
          setShowModal={setShowAddTodoModal}
          showModal={showAddTodoModal}
        />
      )}

      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
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

  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    // marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default DashboardScreen;
