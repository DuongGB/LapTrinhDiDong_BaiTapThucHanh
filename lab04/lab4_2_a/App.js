import React, { useState } from 'react';
import {Text,View,StyleSheet,TouchableOpacity,Dimensions,Image,TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import { Linking } from 'react-native';
import {RadioButton} from 'react-native-paper'
import {LinearGradient} from 'expo-linear-gradient'
const lab3_1_e = () => {
  const [isPasswordVisible, setPasswordVisible] = React.useState(false);
  const togglePasswordVisibility = () => {setPasswordVisible(!isPasswordVisible);};
  const [checked,setChecked]=React.useState()

  return (
    <LinearGradient colors={['#FBCB00','#BF9A00']} style={{flex:1}}>
    <View style={{flex: 1,alignItems: 'center',justifyContent: 'center'}}>
      
      <View style={{flex: 3,alignItems: 'center',justifyContent: 'center',}}>
        <Text style={{fontSize: 25, fontWeight:700, textTransform: 'uppercase'}}>Login</Text>
      </View>

      <View style={{flex: 2,alignItems: 'center',justifyContent: 'space-between',}}>
        <View style={{flexDirection:'row',width:330,justifyContent:'center',alignItems:'center'}}>
          <Image source={require('./assets/avatar.png')} style={{height:30,width:30}}/>
          <TextInput style={styles.textInput} placeholder='Name'/>
        </View>
        <View style={{flexDirection:'row',width: 330,justifyContent:'center',alignItems:'center',backgroundColor:'#C4C4C44D'}}>
          <Image source={require('./assets/lock.png')} style={{height:30,width:30}}/>
          <TextInput style={styles.textInput} placeholder='Password'secureTextEntry={!isPasswordVisible}/>
          <TouchableOpacity onPress={togglePasswordVisibility} style={{backgroundColor:'#C4C4C44D', height: 54,justifyContent:'center', paddingRight:15}}>
            <Icon name={isPasswordVisible ? 'eye' : 'eye-slash'} size={30} color="black"/>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{flex: 2,alignItems: 'center',justifyContent: 'end',width:screenWidth}}>
        <TouchableOpacity style={styles.buttonStyle}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>

      <View style={{flex: 2,alignItems: 'center',justifyContent: 'space-evenly'}}>
        <Text style={styles.paragraph}>
          Forgot your Password?
        </Text>
      </View>

    </View>
    </LinearGradient>
  );
};

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  paragraph: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight:700
  },
  buttonStyle: {
    width: 330,
    height: 45,
    backgroundColor: '#060000',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:3
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 700,
    textTransform: 'uppercase',
    color:'#FFF'
  },
  textInput:{
    marginBottom:10,
    height: 54,
    width:330,
    backgroundColor:'#C4C4C44D', 
    fontSize: 18,
    paddingHorizontal: 15
  },
  viewicons:{
    width: 300/3,
    height:45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:3
  }
});

export default lab3_1_e;