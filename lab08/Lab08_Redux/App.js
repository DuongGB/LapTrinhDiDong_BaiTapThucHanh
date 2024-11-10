import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TextInput,
    Button,
    TouchableOpacity,
    Image,
} from "react-native";
import React, { useState, useEffect, useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import { store } from "./components/redux/store";
import Screen_01 from "./components/screen/Screen_01";
import Screen_02 from "./components/screen/Screen_02";
import Screen_03 from "./components/screen/Screen_03";

const Stack = createNativeStackNavigator();
export default function MyApp() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="Screen_01"
                    screenOptions={{ headerShown: false }}
                >
                    <Stack.Screen name="Screen_01" component={Screen_01} />
                    <Stack.Screen name="Screen_02" component={Screen_02} />
                    <Stack.Screen name="Screen_03" component={Screen_03} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}
