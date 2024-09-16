import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'
const lab3_1_a = () => {
  return (
    <LinearGradient colors={['#C7F4F6','#D1F4F6','#E5F4F5','#37D6F8', '#00CCF9']} 
    locations={[0,0.3,0.85,1]}
    style={{flex:1}}>
      <View style={{flex: 1}}>
        
        <View style={{flex: 2,alignItems: 'center',justifyContent: 'center'}}>
          <View style={style.circleShape}></View>
        </View>

        <View style={{flex: 1,alignItems: 'center',justifyContent: 'center',height:58}}>
            <Text style={style.paragraph}>
              Grow {"\n"} Your Business
            </Text>
        </View>

        <View style={{flex: 1,alignItems: 'center',justifyContent: 'center',height: 36}}>
            <Text style={style.paragraphUnder}>
              We will help you to grow your business using online server
            </Text>
        </View>

        <View style={{flex: 1,flexDirection: 'row',alignItems: 'center',justifyContent: 'space-around',width:'100%'}}>
          <TouchableOpacity style={style.buttonStyle}>
            <Text style={style.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.buttonStyle}>
            <Text style={style.buttonText}>Sign up</Text>
          </TouchableOpacity>
        </View>

        <View style={{flex:1,alignItems:'center'}}>
          <Text style={{fontSize:18,fontWeight:'bold'}}>
            HOW WE WORK
          </Text>
        </View>

      </View>
    </LinearGradient>
  );
};

const style = StyleSheet.create({
  circleShape: {
    width: 140,
    height: 140,
    borderRadius: 140 / 2,
    borderColor: 'black',
    borderWidth: 15,
  },
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
    width: 119,
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

export default lab3_1_a;