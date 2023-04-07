import React from "react";
import { View } from "react-native";
import LoginForm from "../components/LoginForm";

const LoginScreen = (props: any) => {
  return (
    <View>
      <LoginForm navigation={props.navigation} />
    </View>
  );
};

export default LoginScreen;
