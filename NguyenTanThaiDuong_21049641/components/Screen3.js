import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import { useDispatch } from "react-redux";
import { addBike } from "../store/bikesSlice";

const Screen3 = ({ navigation }) => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [img, setImg] = useState("");

    const dispatch = useDispatch();

    const handleAddBike = () => {
        if (!name || !price || !category || !img) {
            Alert.alert("Error", "Please fill out all fields");
            return;
        }

        const newBike = {
            name,
            price,
            category,
            img,
        };

        dispatch(addBike(newBike))
            .then(() => {
                Alert.alert("Success", "Bike added successfully!");
                navigation.goBack();
            })
            .catch(() => Alert.alert("Error", "Failed to add bike"));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>ADD </Text>
            <TextInput
                style={styles.input}
                placeholder="Enter bike name"
                placeholderTextColor={"rgba(0,0,0,0.5)"}
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="Enter price"
                value={price}
                onChangeText={setPrice}
                keyboardType="numeric"
                placeholderTextColor={"rgba(0,0,0,0.5)"}
            />
            <TextInput
                style={styles.input}
                placeholder="Enter category"
                placeholderTextColor={"rgba(0,0,0,0.5)"}
                value={category}
                onChangeText={setCategory}
            />
            <TextInput
                style={styles.input}
                placeholder="Enter image URL"
                placeholderTextColor={"rgba(0,0,0,0.5)"}
                value={img}
                onChangeText={setImg}
            />
            <Button title="ADD BIKE" onPress={handleAddBike} color="green" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: "#fff",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 16,
        color: "#green",
    },
    input: {
        height: 40,
        borderColor: "#ccc",
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
        borderRadius: 5,
    },
});

export default Screen3;
