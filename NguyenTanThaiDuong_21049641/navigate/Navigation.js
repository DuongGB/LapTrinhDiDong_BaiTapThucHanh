import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Screen1 from "../components/Screen1";
import Screen2 from "../components/Screen2";
import Screen3 from "../components/Screen3";
const Stack = createNativeStackNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Screen1" component={Screen1} />
                <Stack.Screen name="Screen2" component={Screen2} />
                <Stack.Screen name="Screen3" component={Screen3} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
