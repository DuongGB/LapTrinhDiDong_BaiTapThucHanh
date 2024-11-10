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
import { useDispatch, useSelector } from "react-redux";
import { setSelectedUser, setTodos } from "../../components/redux/todosSlice";

const Screen01 = ({ navigation }) => {
    const [name, setName] = useState("");
    const dispatch = useDispatch();
    const users = useSelector((state) => state.todos.users);

    const checkUser = () => {
        if (!name) {
            alert("Please enter your name");
            return;
        }
        const foundUser = users.find(
            (user) => user.name.toLowerCase() === name.toLowerCase()
        );
        if (foundUser) {
            dispatch(setSelectedUser(foundUser));
            setName("");
            navigation.navigate("Screen_02");
        } else {
            alert("User not found");
        }
    };
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Image source={require("../../assets/Image.png")} />
                <Text
                    style={{
                        color: "#8353E2",
                        fontSize: 24,
                        fontWeight: "700",
                        textAlign: "center",
                        marginVertical: 30,
                    }}
                >
                    MANAGE YOUR TASK
                </Text>
            </View>
            <View
                style={{
                    flexDirection: "row",
                    borderRadius: 12,
                    borderWidth: 1,
                }}
            >
                <Image
                    style={{
                        margin: 5,
                        alignItems: "center",
                    }}
                    source={require("../../assets/mail.png")}
                />
                <TextInput
                    style={{ borderRadius: 12, padding: 5 }}
                    placeholder="Enter your name"
                    placeholderTextColor={"#BCC1CA"}
                    value={name}
                    onChangeText={setName}
                />
            </View>
            <View>
                <TouchableOpacity
                    onPress={checkUser}
                    style={{
                        width: 200,
                        paddingVertical: 6,
                        borderWidth: 1,
                        borderRadius: 12,
                        marginTop: 20,
                        backgroundColor: "#00BDD6",
                    }}
                >
                    <Text style={{ color: "#fff", textAlign: "center" }}>
                        GET STARTED
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});

export default Screen01;
