import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'
const lab3_1_b = () => {
  return (
    <LinearGradient colors={['#C7F4F6','#D1F4F6','#E5F4F5','#37D6F8', '#00CCF9']} 
    locations={[0,0.3,0.85,1]}
    style={{flex:1}}>
      <View style={{flex: 1}}>
        
        <View style={{flex: 2,alignItems: 'center',justifyContent: 'center'}}>
          <Image source={require('./assets/lock.png')} style={{height:117,width:105}}/>
        </View>

        <View style={{flex: 1,alignItems: 'center',justifyContent: 'center',height:58}}>
            <Text style={style.paragraph}>
              FORGET {"\n"} PASSWORD
            </Text>
        </View>

        <View style={{flex: 1,alignItems: 'center',justifyContent: 'center',height: 36}}>
            <Text style={style.paragraphUnder}>
              Provide your account's email for which you want to reset your password
            </Text>
        </View>

        <View style={{flex:1,alignItems:'center',justifyContent:'center',flexDirection:'row',width:screenWidth}}>
        <Image source={require('./assets/mail.png')} style={{height: 45, width:45}}
        />
          <TextInput style={{width:258,height:45,backgroundColor:'#C4C4C4',fontSize:18}} placeholder='Email'></TextInput>
        </View>

        <View style={{flex:1,alignItems:'center',width:screenWidth,flexDirection:'row',justifyContent:'center'}}>
          <TouchableOpacity style={style.buttonStyle}>
            <Text style={style.buttonText}>NEXT</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex:1}}/>

      </View>
    </LinearGradient>
  );
};

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const style = StyleSheet.create({
  paragraph: {
    textAlign: 'center',
    fontWeight: 700,
    fontSize: 22,
    lineHeight: 29.3,
    textTransform:'uppercase'
  },
  paragraphUnder: {
    textAlign: 'center',
    fontWeight: 700,
    fontSize: 14,
    lineHeight: 17.58,
  },
  buttonStyle: {
    width:305,
    height: 48,
    borderRadius: 10,
    backgroundColor: '#E3C000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 700,
    textTransform:'uppercase'
  },
});

export default lab3_1_b;