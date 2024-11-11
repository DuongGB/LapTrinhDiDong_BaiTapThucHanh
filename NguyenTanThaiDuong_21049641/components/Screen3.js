import React from "react";
import { View, Text, Image, StyleSheet, Button } from "react-native";
import { useSelector } from "react-redux";

const Screen3 = ({ route }) => {
    const { id } = route.params;
    const product = useSelector((state) =>
        state.products.items.find((item) => item.id === id)
    );

    if (!product) {
        return <Text>Product not found!</Text>;
    }

    return (
        <View style={styles.container}>
            <Image source={{ uri: product.img }} style={styles.image} />
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.price}>Price: ${product.price}</Text>
            <Text style={styles.description}>{product.discription}</Text>
            <Button title="Add to Cart" onPress={() => {}} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        alignItems: "center",
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
    },
    price: {
        fontSize: 18,
        marginVertical: 8,
    },
    description: {
        fontSize: 16,
        textAlign: "center",
    },
});

export default Screen3;
