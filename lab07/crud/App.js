import React, { useState, useEffect } from 'react';
import {
  FlatList,
  ScrollView,
  SafeAreaView,
  View,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

MyCRUDScreen = ({ route, navigation }) => {
  const createUserApi = 'https://6443f92c466f7c2b4b5ea42e.mockapi.io/api/User';
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  /**load data
   * id:String
   * userName: String
   * email: String
   */
  /**Render data */
  const fetchUsers = async () => {
    const response = await fetch(createUserApi);
    const data = await response.json();
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  /**Select user */
  const getUser = (user) => {
    setUser(user);
    setUserName(user.userName);
    setEmail(user.email);
  };
  /**reset */
  const reset = () => {
    setUser(null);
    setUserName('');
    setEmail('');
  };

  /**ADD DATA*/
  const addUser = async () => {
    if (!userName || !email) return;
    await fetch(createUserApi, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userName, email }),
    });
    reset();
    fetchUsers();
  };

  /**UPDATE DATA*/
  const updateUser = async () => {
    if (!user || !userName || !email) return;
    await fetch(`${createUserApi}/${user.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userName, email }),
    });
    reset();
    fetchUsers();
  };

  /**DELETE DATA*/
  const deleteUser = async (id) => {
    await fetch(`${createUserApi}/${id}`, {
      method: 'DELETE',
    });
    reset();
    fetchUsers();
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          gap: 10,
          marginBottom: 8,
        }}>
        <TouchableOpacity
          style={[styles.btnStyle, { backgroundColor: 'green' }]}
          onPress={addUser}>
          <Text style={styles.btnText}>ADD</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btnStyle, { backgroundColor: 'blue' }]}
          onPress={updateUser}>
          <Text style={styles.btnText}>Update</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btnStyle, { backgroundColor: 'purple' }]}
          onPress={reset}>
          <Text style={styles.btnText}>RESET</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TextInput
          value={userName}
          onChangeText={setUserName}
          placeholder="Username"
          keyboardType="User name"
          style={styles.input}
        />
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          keyboardType="email-address"
          style={styles.input}
        />
      </View>
      {/**Data*/}
      <FlatList
        data={users}
        keyExtractor={(user) => user.id.toString()}
        showsVerticalScrollIndicator={false} // ẩn thanh cuộn dọc
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => getUser(item)}
            style={{
              backgroundColor: '#dadada',
              borderWidth: 1,
              marginBottom: 5,
              padding: 5,
            }}>
            <Text style={styles.text}>{item.userName}</Text>
            <Text style={styles.text}>{item.email}</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
              <TouchableOpacity
                onPress={() => deleteUser(item.id)}
                style={{
                  backgroundColor: '#fff',
                  padding: 5,
                  borderRadius: 10,
                }}>
                <Text style={{ color: 'red' }}>Delete</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  btnStyle: {
    minWidth: 140,
    minHeight: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  btnText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 700,
    textTransform: 'uppercase',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  text: {
    padding: 5,
  },
});

export default function MyCRUD() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MyCRUDScreen" component={MyCRUDScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
