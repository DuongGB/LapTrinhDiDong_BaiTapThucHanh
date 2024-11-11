import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Screen1 from "./components/Screen1";
import Screen2 from "./components/Screen2";
import Screen3 from "./components/Screen3";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Screen1">
                    <Stack.Screen name="Home" component={Screen1} />
                    <Stack.Screen name="Products" component={Screen2} />
                    <Stack.Screen name="ProductDetail" component={Screen3} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}
