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
  Dimensions,
  TextInput,
} from 'react-native';
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
type ItemData = {
  id: string,
  title: string,
  price: string,
  img: string,
};

const DATA: ItemData[] = [
  {
    id: '1',
    title: 'Cáp chuyển từ Cổng USB sang PS2...',
    price: '69.900 đ',
    img: require('./assets/giacchuyen.png'),
  },
  {
    id: '2',
    title: 'Cáp chuyển từ Cổng USB sang PS2...',
    price: '69.900 đ',
    img: require('./assets/daynguon.png'),
  },
  {
    id: '3',
    title: 'Cáp chuyển từ Cổng USB sang PS2...',
    price: '69.900 đ',
    img: require('./assets/dauchuyendoipsps2.png'),
  },
  {
    id: '4',
    title: 'Cáp chuyển từ Cổng USB sang PS2...',
    price: '69.900 đ',
    img: require('./assets/dauchuyendoi.png'),
  },
  {
    id: '5',
    title: 'Cáp chuyển từ Cổng USB sang PS2...',
    price: '69.900 đ',
    img: require('./assets/carbusbtops2.png'),
  },
  {
    id: '6',
    title: 'Cáp chuyển từ Cổng USB sang PS2...',
    price: '69.900 đ',
    img: require('./assets/daucam.png'),
  },
];

type ItemProps = {
  item: ItemData,
  onPress: () => void,
  backgroundColor: string,
};

const Item = ({ item, onPress, backgroundColor }: ItemProps) => {
  const [rating, setRating] = useState(4);
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.item, { backgroundColor }]}>
      <Image source={item.img} style={styles.img} />
      <Text style={{ paddingHorizontal: 8 }}>{item.title}</Text>
      <View style={{ flexDirection: 'row', paddingHorizontal: 8 }}>
        <Stars
          default={rating}
          count={5}
          half={true}
          starSize={50}
          update={(val: number) => setRating(val)}
          fullStar={<Icon name="star" style={[styles.myStarStyle]} />}
          emptyStar={
            <Icon
              name="star-outline"
              style={[styles.myStarStyle, styles.myEmptyStarStyle]}
            />
          }
          halfStar={<Icon name="star-half" style={[styles.myStarStyle]} />}
        />
        <Text>(15)</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 8,
        }}>
        <Text style={{ fontWeight: 700, fontSize: 12, lineHeight: 14.06 }}>
          {item.price}
        </Text>
        <Text style={{ color: '#969DAA', fontSize: 12, fontWeight: 400 }}>
          -39%
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const App = () => {
  const [numColumns, setNumColumns] = useState(2);
  const [Key, setKey] = useState('numColumns-2'); //Key để buộc render lại khi số cột thay đổi
  {
    /**Cập nhật tự động số lượng cột */
  }
  useEffect(() => {
    const updateLayout = () => {
      const screenWidth = Dimensions.get('window').width;
      const itemWidth = 155;
      let columns = Math.floor(screenWidth / itemWidth);
      // Nếu màn hình lớn hơn 600, thêm một cột sản phẩm
      if (screenWidth > 600) {
        columns += 1; // Tăng thêm một cột khi màn hình đủ lớn
      }
      const newColumns = columns >= 2 ? columns : 2;
      setNumColumns(newColumns);
      setKey(`numColumns-${newColumns}`);
    };

    Dimensions.addEventListener('change', updateLayout);

    updateLayout();

    return () => {
      Dimensions.removeEventListener('change', updateLayout);
    };
  }, []);
  const [selectedId, setSelectedId] = useState(undefined);
  const renderItem = ({ item }: { item: ItemData }) => {
    const backgroundColor = item.id === selectedId ? '#fff' : '#dadada';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        numColumns={numColumns}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/**Header */}
      <View
        style={{
          backgroundColor: '#1BA9FF',
          height: 42,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 10,
        }}>
        <TouchableOpacity>
          <Image source={require('./assets/Vector.png')} style={styles.icon} />
        </TouchableOpacity>
        <View style={styles.inputContainer}>
          <TouchableOpacity>
            <Image source={require('./assets/whh_magnifier.png')} />
          </TouchableOpacity>
          <TextInput style={styles.textInput} placeholder="Dây cáp USB" />
        </View>
        <TouchableOpacity>
          <Image
            source={require('./assets/bi_cart-check.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('./assets/dot.png')} />
        </TouchableOpacity>
      </View>
      {/**Content */}
      <ScrollView>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
          numColumns={numColumns} // Đây là thuộc tính để tạo nhiều cột
          columnWrapperStyle={styles.row} // Điều chỉnh layout hàng cho nhiều cột
          showsVerticalScrollIndicator={false} // Ẩn thanh cuộn dọc
          key={Key} // Key để buộc render lại khi numColumns thay đổi
        />
      </ScrollView>
      {/**Footer */}
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#1BA9FF',
          height: 49,
          justifyContent: 'space-between',
          padding: 10,
        }}>
        <TouchableOpacity>
          <Image source={require('./assets/menu.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('./assets/home.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('./assets/back.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    maxWidth: 155,
    height: 170,
  },
  img: {
    width: 155,
    height: 90,
  },
  icon: {
    width: 32,
    height: 32,
  },
  myStarStyle: {
    color: 'gold',
    backgroundColor: 'transparent',
    fontSize: 20,
  },
  myEmptyStarStyle: {
    color: '#C4C4C4',
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  textInput: {
    width: 192,
    height: 30,
    fontSize: 16,
    backgroundColor: '#fff',
    color: '#7D5B5B',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    paddingHorizontal: 8,
  },
});

export default App;
