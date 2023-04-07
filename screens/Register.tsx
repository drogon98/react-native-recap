import React from "react";
import RegisterForm from "../components/RegisterForm";
import { View } from "react-native";

const RegisterScreen = (props: any) => {
  return (
    <View>
      <RegisterForm navigation={props.navigation} />
    </View>
  );
};

export default RegisterScreen;
