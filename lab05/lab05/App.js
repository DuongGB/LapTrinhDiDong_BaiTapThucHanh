import * as React from 'react';
import { useState, useEffect } from 'react';
import {
  Button,
  View,
  Text,
  SafeAreaView,
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const style1 = StyleSheet.create({
  paragraph: {
    textAlign: 'center',
    fontWeight: 400,
    fontSize: 15,
    lineHeight: 17.58,
  },
  button: {
    marginTop: 10,
    backgroundColor: '#EE0A0A',
    justifyContent: 'center',
    alignItems: 'center',
    height: 44,
    borderWidth: 1,
    borderColor: '#CA1536',
    borderRadius: 10,
  },
  text: {
    lineHeight: 17.58,
    fontSize: 15,
    fontWeight: 400,
    color: '#000',
    textTransform: 'uppercase',
    marginLeft: 50,
  },
});
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Screen01" component={Screen01} />
        <Stack.Screen name="Screen02" component={Screen02} />
        <Stack.Screen name="Screen03" component={Screen03} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Screen01({ route, navigation }) {
  const [productImage, setProductImage] = useState(
    require('./assets/vs_blue.png')
  );
  useEffect(() => {
    if (route.params?.color) {
      switch (route.params.color) {
        case 'Đỏ':
          setProductImage(require('./assets/vs_red.png'));
          break;
        case 'Bạc':
          setProductImage(require('./assets/vs_silver.png'));
          break;
        case 'Đen':
          setProductImage(require('./assets/vs_black.png'));
          break;
        case 'Xanh':
          setProductImage(require('./assets/vs_blue.png'));
          break;
      }
    }
  }, [route.params?.color]);
  return (
    <SafeAreaView style={{ flex: 1, flexDirection: 'column', padding: 20 }}>
      {/*top*/}
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Image source={productImage} style={{ width: 201, height: 261 }} />
        <Text
          style={{
            width: 300,
            justifyContent: 'center',
            alignContent: 'center',
          }}>
          Điện thoại Vsmart Joy 3- Hàng chính hãng
        </Text>
      </View>

      {/*mid */}
      <View style={{ justifyContent: 'space-around', marginBottom: 10 }}>
        <View
          style={{
            flexDirection: 'row',
            width: 300,
            justifyContent: 'space-between',
          }}>
          <View style={{ flexDirection: 'row' }}>
            {[...Array(5)].map((_, i) => (
              <Image
                key={i}
                source={require('./assets/star.png')}
                style={{ width: 23, height: 25 }}
              />
            ))}
          </View>
          <View>
            <Text style={style1.paragraph}>(Xem 828 đánh giá)</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: 300,
          }}>
          <Text style={{ fontWeight: 700, fontSize: 18, lineHeight: 21.09 }}>
            1.790.000 đ
          </Text>
          <Text
            style={{
              fontSize: 15,
              lineHeight: 17.58,
              fontWeight: 700,
              opacity: '58%',
              textDecorationLine: 'line-through',
            }}>
            1.790.000 đ
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            fontSize: 12,
            fontWeight: 700,
            lineHeight: 14.06,
            justifyContent: 'flex-start',
          }}>
          <Text style={{ color: '#FA0000', marginRight: 10 }}>
            Ở đâu rẻ hơn hoàn tiền
          </Text>
          <Image source={require('./assets/icon1.png')} />
        </View>
      </View>

      {/*bot */}
      <View style={{ flex: 1, justifyContent: 'space-between' }}>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
            borderRadius: 10,
          }}
          onPress={() => navigation.navigate('Screen02')}>
          <Text style={style1.text}>4 màu-chọn màu</Text>
          <Image
            source={require('./assets/arrow.png')}
            style={{ marginLeft: 50 }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={style1.button}
          onPress={() => {
            // Điều hướng đến màn hình hiển thị hình ảnh sản phẩm toàn màn hình
            navigation.navigate('Screen03', { productImage });
          }}>
          <Text style={{ color: '#F9F2F2', fontSize: 20, fontWeight: 700 }}>
            CHỌN MUA
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
{
  /**---------------------------------------Màn hình 2----------------------------------------- */
}
const style2 = StyleSheet.create({
  textCol: { fontWeight: 700, fontSize: 15, alignItems: 'center' },
  btnDone: {
    backgroundColor: '#1952E294',
    borderRadius: 10,
    borderWidth: 1,
    width: 326,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
function Screen02({ navigation }) {
  const [selectedColor, setSelectedColor] = useState('Xanh');
  const [productImage, setProductImage] = useState(
    require('./assets/vs_blue.png')
  );

  const handleColorPress = (color) => {
    setSelectedColor(color);
    switch (color) {
      case 'Đỏ':
        setProductImage(require('./assets/vs_red.png'));
        break;
      case 'Bạc':
        setProductImage(require('./assets/vs_silver.png'));
        break;
      case 'Đen':
        setProductImage(require('./assets/vs_black.png'));
        break;
      case 'Xanh':
        setProductImage(require('./assets/vs_blue.png'));
        break;
    }
  };
  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/*header */}
      <View style={{ flexDirection: 'row' }}>
        <Image source={productImage} style={{ width: 112, height: 132 }} />
        <View style={{ flex: 1, justifyContent: 'space-around' }}>
          <Text
            style={{
              fontWeight: 400,
              fontSize: 15,
              lineHeight: 17.58,
            }}>
            Điện thoại Vsmart Joy 3 Hàng chính hãng
          </Text>
          <Text>
            Màu: <span style={style2.textCol}>{selectedColor}</span>
          </Text>
          <Text>
            Cung cấp bởi: <span style={style2.textCol}>Tiki Tradding</span>
          </Text>
          <Text style={style2.textCol}>1.790.000 đ</Text>
        </View>
      </View>

      <View
        style={{
          flex: 1,
          backgroundColor: '#C4C4C4',
          width: screenWidth,
        }}>
        <Text
          style={{
            marginTop: 10,
            fontWeight: 400,
            fontSize: 18,
            lineHeight: 21.09,
          }}>
          Chọn màu bên dưới:
        </Text>
        <View
          style={{
            flex: 1,
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 10,
          }}>
          <TouchableOpacity
            style={{ width: 65, height: 60, backgroundColor: '#C5F1FB' }}
            onPress={() => {
              handleColorPress('Bạc');
            }}
          />
          <TouchableOpacity
            style={{ width: 65, height: 60, backgroundColor: '#F30D0D' }}
            onPress={() => {
              handleColorPress('Đỏ');
            }}
          />
          <TouchableOpacity
            style={{ width: 65, height: 60, backgroundColor: '#000' }}
            onPress={() => {
              handleColorPress('Đen');
            }}
          />
          <TouchableOpacity
            style={{ width: 65, height: 60, backgroundColor: '#234896' }}
            onPress={() => {
              handleColorPress('Xanh');
            }}
          />
        </View>
        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity
            style={style2.btnDone}
            onPress={() => {
              // Quay lại Screen01 và truyền màu đã chọn
              navigation.navigate('Screen01', { color: selectedColor });
            }}>
            <Text
              style={{
                color: '#F9F2F2',
                textTransform: 'uppercase',
                fontSize: 20,
                fontWeight: 700,
              }}>
              Xong
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
{
  /**--------------------------Màn hình 3--------------------------------------------- */
}
function Screen03({route}) {
  const { productImage } = route.params;
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <Image
        source={productImage}
        style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
      />
    </SafeAreaView>
  );
}
const Stack = createNativeStackNavigator();
