import {
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  View,
  ScrollView,
  Dimensions,
} from 'react-native';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
const Lab04_Tiki_Ok = () => {
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(141800);
  const plusCountClick = () => {
    setCount((prevCount) => {
      const newCount = prevCount + 1;
      setPrice(141800 * newCount);
      return newCount;
    });
  };
  const minusCountClick = () => {
    setCount((prevCount) => {
      const newCount = Math.max(1, prevCount - 1);
      setPrice(141800 * newCount);
      return newCount;
    });
  };
  return (
    <SafeAreaView style={{ backgroundColor: '#C4C4C4', flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        {/* Top */}
        <View style={{ backgroundColor: '#fff', height: 280, padding: 10 }}>
          {/* Top*/}
          <View
            style={{
              flexDirection: 'row',
            }}>
            {/*Left */}
            <View>
              <Image
                source={require('./assets/book.png')}
                style={{ marginBottom: 10 }}
              />
              <Text style={styles.paragraph}>Mã giảm giá đã lưu</Text>
            </View>
            {/*Right */}
            <View
              style={{
                padding: 10,
                justifyContent: 'space-between',
              }}>
              <Text style={styles.paragraph}>
                Nguyên hàm tích phân và ứng dụng
              </Text>
              <Text style={styles.paragraph}>Cung cấp bởi Tiki Trading</Text>
              <Text style={styles.textPrice}>141.800 đ</Text>
              <Text
                style={{
                  color: '#808080',
                  textDecorationLine: 'line-through',
                  height: 14,
                  fontSize: 12,
                }}>
                141.800 đ
              </Text>
              <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity
                  style={styles.btnCount}
                  onPress={minusCountClick}>
                  <Text style={{ fontSize: 14, fontWeight: 700 }}>-</Text>
                </TouchableOpacity>
                <Text style={{ paddingLeft: 10, paddingRight: 10 }}>
                  {count}
                </Text>
                <TouchableOpacity
                  style={styles.btnCount}
                  onPress={plusCountClick}>
                  <Text style={{ fontSize: 14, fontWeight: 700 }}>+</Text>
                </TouchableOpacity>
                <Text
                  style={{
                    marginLeft: 90,
                    color: '#134FEC',
                    fontWeight: 700,
                    fontSize: 12,
                    lineHeight: 14.06,
                  }}>
                  Mua sau
                </Text>
              </View>
              <Text
                style={{
                  color: '#134FEC',
                  fontWeight: 700,
                  fontSize: 12,
                  lineHeight: 14.06,
                }}>
                Xem tại đây
              </Text>
            </View>
          </View>
          {/* Bottom */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 20,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                borderWidth: 1,
                width: 208,
                height: 45,
                borderRadius: 2,
                color: '#E53935',
              }}>
              <View
                style={{
                  width: 32,
                  height: 16,
                  backgroundColor: '#F2DD1B',
                  marginLeft: 10,
                }}
              />
              <Text
                style={{
                  fontWeight: 700,
                  color: '#011627',
                  fontSize: 18,
                  lineHeight: 21.09,
                  marginLeft: 20,
                }}>
                Mã giảm giá
              </Text>
            </View>
            <TouchableOpacity
              style={{
                width: 99,
                height: 45,
                backgroundColor: '#0A5EB7',
                borderRadius: 2,
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontWeight: 700,
                  lineHeight: 23.44,
                  fontSize: 20,
                  textAlign: 'center',
                  color: '#fff',
                }}>
                Áp dụng
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/*Mid*/}
        <View>
          <View
            style={{
              marginTop: 15,
              marginBottom: 15,
              backgroundColor: '#fff',
              height: 51,
              paddingLeft: 5,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}>
            <Text style={styles.paragraph}>
              {' '}
              Bạn có phiếu quà tặng Tiki/Got it/ Urbox?
            </Text>
            <Text
              style={{
                marginLeft: 20,
                fontSize: 12,
                fontWeight: 700,
                color: '#134FEC',
              }}>
              Nhập tại đây
            </Text>
          </View>
          <View
            style={{
              backgroundColor: '#fff',
              flexDirection: 'row',
              padding: 10,
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontWeight: 700,
                fontSize: 18,
                color: '#011627',
                lineHeight: 21.09,
              }}>
              Tạm tính
            </Text>
            <Text style={styles.textPrice}>{price.toLocaleString()}đ</Text>
          </View>
        </View>

        {/* Bot*/}
        <View
          style={{
            height: 120,
            backgroundColor: '#fff',
            marginTop: 42,
            padding: 10,
            justifyContent:'space-around'
          }}>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text
              style={{
                color: '#808080',
                fontWeight: 700,
                fontSize: 18,
                lineHeight: 21.09,
              }}>
              Thành tiền
            </Text>
            <Text style={styles.textPrice}>{price.toLocaleString()}đ</Text>
          </View>
          <TouchableOpacity style={{backgroundColor:'#E53935',height:45,borderRadius:2,justifyContent:'center',alignItems:'center'}}>
          <Text style={{fontWeight:700,color:'#fff',textTransform:'uppercase',fontSize:20,lineHeight:23.44}}>Tiến hành đặt hàng</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  paragraph: {
    fontSize: 12,
    fontWeight: 700,
    lineHeight: 14.06,
  },
  textPrice: {
    color: '#EE0D0D',
    fontWeight: 700,
    fontSize: 18,
    lineHeight: 21.09,
  },
  btnCount: {
    width: 14.22,
    height: 16,
    backgroundColor: '#C4C4C4',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textinput: {
    height: 30,
    width: 30,
    textAlign: 'center',
    fontSize: 20,
    color: 'black',
  },
});
export default Lab04_Tiki_Ok;
