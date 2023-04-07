import React from "react";
import {
  Button,
  GestureResponderEvent,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

interface IRegisterForProps {
  navigation: any;
}

const RegisterForm = (props: IRegisterForProps) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  const handleEmailChange = (val: string) => {
    setEmail(val);
  };

  const handlePasswordChange = (val: string) => {
    setPassword(val);
  };

  const handleConfirmPasswordChange = (val: string) => {
    setConfirmPassword(val);
  };

  const handleRegister = (e: GestureResponderEvent) => {
    console.log("e", e);
    props.navigation.navigate("Dashboard");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Register</Text>
      <TextInput
        placeholder="Email"
        style={styles.input}
        onChangeText={handleEmailChange}
      />
      <TextInput
        placeholder="Password"
        style={styles.input}
        onChangeText={handlePasswordChange}
        secureTextEntry={true}
      />

      <TextInput
        placeholder="Confirm Password"
        style={styles.input}
        onChangeText={handleConfirmPasswordChange}
        secureTextEntry={true}
      />
      <Button title="Register" onPress={handleRegister} />
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

  input: {
    height: 40,
    marginTop: 12,
    marginBottom: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default RegisterForm;
