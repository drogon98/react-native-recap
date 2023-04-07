import React from "react";
import { Modal, View, Text, StyleSheet, Button, TextInput } from "react-native";
import { ITodo, addTodo } from "../store/slices/todos";
import { useAppDispatch } from "../store";
import uuid from "react-native-uuid";

interface IAddTodoModalProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddTodoModal = (props: IAddTodoModalProps) => {
  const [title, setTitle] = React.useState("");
  const dispatch = useAppDispatch();

  const handleChange = (val: string) => {
    setTitle(val);
  };

  const handleSaveTodo = (todo: ITodo) => {
    dispatch(addTodo(todo));
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
          <Text style={styles.modalText}>Add Todo</Text>

          <TextInput
            placeholder="Title"
            style={styles.input}
            onChangeText={handleChange}
          />
          {/* <TextInput
        placeholder="Password"
        style={styles.input}
        onChangeText={handlePasswordChange}
        secureTextEntry={true}
      /> */}

          <View style={styles.buttonsWrapper}>
            <Button
              title="Save"
              onPress={() => {
                handleSaveTodo({
                  id: uuid.v4().toString(),
                  title,
                });
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

export default AddTodoModal;
