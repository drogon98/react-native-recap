import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import LoginScreen from "./screens/Login";
import RegisterScreen from "./screens/Register";
import { Provider } from "react-redux";
import { store } from "./store";
import TodoScreen from "./screens/Todo";
import DashboardScreen from "./screens/Dashboard";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Dashboard" component={DashboardScreen} />
          <Stack.Screen name="Todo" component={TodoScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
