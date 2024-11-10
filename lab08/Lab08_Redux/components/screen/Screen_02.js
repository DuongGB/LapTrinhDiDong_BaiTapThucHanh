import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TextInput,
    Button,
    TouchableOpacity,
    Image,
    FlatList,
} from "react-native";
import { CheckBox } from "react-native-elements";
import React, { useState, useEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, editTodo } from "../../components/redux/todosSlice";

const Screen_02 = ({ navigation }) => {
    const user = useSelector((state) => state.todos.selectedUser);
    const dispatch = useDispatch();
    const [editingTodoId, setEditingTodoId] = useState(null);
    const [inputValue, setInputValue] = useState("");

    const handleToggleCompleted = (todo_id) => {
        const todo = user.todos.find((todo) => todo.todo_id === todo_id);
        if (todo) {
            dispatch(
                editTodo({
                    userId: user.id,
                    todo_id,
                    editTodo: { ...todo, completed: !todo.completed },
                })
            );
            console.log("Toggled todo", todo);
        }
    };

    const handleDeleteTodo = (todo_id) => {
        dispatch(deleteTodo({ userId: user.id, todo_id }));
    };

    const handleEditTodo = (todo) => {
        setEditingTodoId(todo.todo_id);
        setInputValue(todo.title);
    };

    const handleSaveEdit = (todo_id) => {
        dispatch(
            editTodo({
                userId: user.id,
                todo_id,
                editTodo: {
                    ...todo,
                    title: inputValue,
                    completed: user.todos.find(
                        (todo) => todo.todo_id === todo_id
                    ).completed,
                },
            })
        );
        setEditingTodo(null);
    };
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerTop}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image
                            source={require("../../assets/iconArrowLeft.png")}
                        />
                    </TouchableOpacity>
                    <View style={{ flexDirection: "row" }}>
                        <Image source={require("../../assets/user.png")} />
                        <View style={{ marginHorizontal: 10 }}>
                            <Text
                                style={{ fontWeight: 700, textAlign: "center" }}
                            >
                                Hi, {user?.name}
                            </Text>
                            <Text>What do you want to do today?</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.search}>
                    <Image
                        style={{ marginHorizontal: 5 }}
                        source={require("../../assets/search.png")}
                    />
                    <TextInput
                        style={styles.searchTextInput}
                        placeholder="Search"
                    />
                </View>
            </View>
            <View style={{ width: "100%", paddingHorizontal: 20 }}>
                <FlatList
                    data={user?.todos || []} // Nếu user không tồn tại thì trả về mảng rỗng
                    keyExtractor={(item) => item.todo_id.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                width: "100%",
                                backgroundColor: "rgba(0,0,0,0.3)",
                                marginVertical: 5,
                                borderRadius: 10,
                            }}
                        >
                            <CheckBox
                                checked={item.completed}
                                onPress={() =>
                                    handleToggleCompleted(item.todo_id)
                                }
                            />
                            {editingTodoId === item.todo_id ? (
                                <TextInput
                                    value={inputValue}
                                    onChangeText={setInputValue}
                                    onBlur={() => handleSaveEdit(item.todo_id)}
                                    style={{
                                        flex: 1,
                                        padding: 5,
                                        borderColor: "gray",
                                        borderWidth: 1,
                                        borderRadius: 4,
                                    }}
                                    autoFocus // Tự động hiển thị bàn phím khi vào chế độ chỉnh sửa
                                />
                            ) : (
                                <TouchableOpacity
                                    onPress={() => handleEditTodo(item)}
                                    style={{ flex: 1 }}
                                >
                                    <Text>{item.title}</Text>
                                </TouchableOpacity>
                            )}
                            <TouchableOpacity
                                onPress={() => handleDeleteTodo(item.todo_id)}
                            >
                                <Image
                                    source={require("../../assets/delete.png")}
                                />
                            </TouchableOpacity>
                        </TouchableOpacity>
                    )}
                />
            </View>
            <TouchableOpacity
                style={{ padding: 20 }}
                onPress={() => navigation.navigate("Screen_03")}
            >
                <Image source={require("../../assets/buttonAdd.png")} />
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        paddingHorizontal: 20,
    },
    header: {
        width: "100%",
    },
    headerTop: {
        height: 60,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        paddingHorizontal: 20,
    },
    search: {
        flexDirection: "row",
        alignItems: "center",
        width: "90%",
        justifyContent: "center",
        marginHorizontal: 20,
        borderWidth: 1,
    },
    searchTextInput: {
        flex: 1,
        padding: 10,
    },
});

export default Screen_02;
