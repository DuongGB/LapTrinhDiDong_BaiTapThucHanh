import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Screen01 from "../components/Screen1";
import Screen02 from "../components/Screen2";
const Stack = createNativeStackNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Screen01" component={Screen01} />
                <Stack.Screen name="Screen02" component={Screen02} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
