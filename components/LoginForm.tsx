import React from "react";
import {
  Button,
  GestureResponderEvent,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const LoginForm = (props: any) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleEmailChange = (val: string) => {
    setEmail(val);
  };

  const handlePasswordChange = (val: string) => {
    setPassword(val);
  };

  const handleLogin = (e: GestureResponderEvent) => {
    props.navigation.navigate("Dashboard");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Log In</Text>
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
      <Button title="Log In" onPress={handleLogin} />
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

export default LoginForm;
