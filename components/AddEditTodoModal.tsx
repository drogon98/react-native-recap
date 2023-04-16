import React, { useEffect } from "react";
import { Modal, View, Text, StyleSheet, Button, TextInput } from "react-native";
import { ITodo, addTodo, editTodo, setActiveTodo } from "../store/slices/todos";
import { useAppDispatch, useAppSelector } from "../store";
import uuid from "react-native-uuid";

interface IAddEditTodoModalProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  action: "add" | "edit";
}

const AddEditTodoModal = (props: IAddEditTodoModalProps) => {
  const [title, setTitle] = React.useState("");
  const dispatch = useAppDispatch();
  const todo = useAppSelector((state) => state.todos.activeTodo);
  const [todoId, setTodoId] = React.useState("");

  useEffect(() => {
    if (props.action === "edit" && todo) {
      setTitle(todo.title);
      setTodoId(todo.id);
    }
  }, [todo, props.action]);

  const handleChange = (val: string) => {
    setTitle(val);
  };

  const handleSaveTodo = (title: string) => {
    if (props.action === "add") {
      dispatch(
        addTodo({
          title,
          id: uuid.v4().toString(),
        })
      );
    } else if (props.action === "edit") {
      const updatedTodo = {
        title,
        id: todoId,
      };
      dispatch(setActiveTodo(updatedTodo));
      dispatch(editTodo(updatedTodo));
    }
    props.setShowModal(false);
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={props.showModal}
      onRequestClose={() => {
        props.setShowModal(false);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>
            {props.action === "add" ? "Add" : "Edit"} Todo
          </Text>

          <TextInput
            placeholder="Title"
            style={styles.input}
            onChangeText={handleChange}
            value={title}
          />
 

          <View style={styles.buttonsWrapper}>
            <Button
              title="Save"
              onPress={() => {
                handleSaveTodo(title);
              }}
            />
            <Button
              title="Close"
              onPress={() => {
                props.setShowModal(false);
              }}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },

  input: {
    height: 40,
    marginTop: 12,
    marginBottom: 12,
    borderWidth: 1,
    padding: 10,
    width: 300,
  },

  buttonsWrapper: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    width: 300,
  },
});

export default AddEditTodoModal;
