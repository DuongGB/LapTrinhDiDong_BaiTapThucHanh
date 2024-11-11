import React, { useEffect } from "react";
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    Image,
    StyleSheet,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { fetchBikes } from "../store/bikesSlice"; // Đổi từ fetchProducts sang fetchBikes

const Screen2 = ({ navigation }) => {
    const dispatch = useDispatch();
    // Truy xuất từ state.bikes thay vì state.products
    const products = useSelector((state) => state.bikes.items);
    const status = useSelector((state) => state.bikes.status);
    const error = useSelector((state) => state.bikes.error);

    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchBikes()); // Đổi từ fetchProducts sang fetchBikes
        }
    }, [status, dispatch]);

    const handleProductClick = (id) => {
        navigation.navigate("ProductDetail", { id });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>The World's Best Bike</Text>
            {status === "loading" && <Text>Loading...</Text>}
            {status === "failed" && <Text>Error: {error}</Text>}
            <FlatList
                data={products}
                keyExtractor={(item) => item.id.toString()} // Đảm bảo `id` là chuỗi
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => handleProductClick(item.id)}
                        style={styles.card}
                    >
                        <Image
                            source={{ uri: item.img }}
                            style={styles.image}
                        />
                        <Text style={styles.name}>{item.title}</Text>
                        <Text style={styles.price}>${item.price}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16,
    },
    card: {
        flexDirection: "column",
        marginBottom: 16,
        alignItems: "center",
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: "contain",
    },
    name: {
        fontSize: 16,
        fontWeight: "bold",
    },
    price: {
        fontSize: 14,
    },
});

export default Screen2;
