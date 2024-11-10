import {
    View,
    SafeAreaView,
    TextInput,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
} from "react-native";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/todosSlice";

const Screen_03 = ({ navigation }) => {
    const dispatch = useDispatch();
    const [inputText, setInputText] = useState("");
    const user = useSelector((state) => state.todos.selectedUser);

    const handleAddTodo = () => {
        if (!inputText.trim()) {
            Alert.alert("Error", "Please enter a job description.");
            return;
        }

        const newTodo = {
            todo_id: new Date().getTime(), //
            title: inputText,
            completed: false,
        };

        dispatch(addTodo({ userId: user.id, newTodo }));
        setInputText(""); // Reset input field
        navigation.goBack(); // Return to previous screen
        console.log("Added todo", newTodo);
    };
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Image source={require("../../assets/user.png")} />
                <View style={{ marginLeft: -60 }}>
                    <Text>Hi, {user?.name}</Text>
                    <Text>What do you want to do today?</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require("../../assets/iconArrowLeft.png")} />
                </TouchableOpacity>
            </View>
            <Text style={styles.title}> ADD YOUR JOB</Text>
            <View style={styles.input}>
                <Image source={require("../../assets/iconInputAdd.png")} />
                <TextInput
                    value={inputText}
                    onChangeText={setInputText}
                    style={{ width: "100%", padding: 5 }}
                    placeholder="input your job"
                    placeholderTextColor={"#BCC1CA"}
                ></TextInput>
            </View>
            <TouchableOpacity style={styles.button} onPress={handleAddTodo}>
                <Text
                    style={{ color: "#fff", fontSize: 16, textAlign: "center" }}
                >
                    FINISH
                </Text>
            </TouchableOpacity>
            <Image source={require("../../assets/Image.png")} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
    },
    header: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        padding: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginVertical: 20,
    },
    input: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderRadius: 12,
        padding: 5,
        width: "90%",
    },
    button: {
        width: 200,
        paddingVertical: 6,
        borderWidth: 1,
        borderRadius: 12,
        marginTop: 20,
        backgroundColor: "#00BDD6",
    },
});

export default Screen_03;
