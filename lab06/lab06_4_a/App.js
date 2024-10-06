import React, { useState } from 'react';
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
} from 'react-native';

type ItemData = {
  id: string,
  title: string,
  shopName: string,
  img: string,
};

const DATA: ItemData[] = [
  {
    id: '1',
    title: 'Ca nấu lẩu, nấu mì mini...',
    shopName: 'Devang',
    img: require('./assets/ca_nau_lau.png'), // Sử dụng require cho hình ảnh cục bộ
  },
  {
    id: '2',
    title: '1KG KHÔ GÀ BƠ TỎI',
    shopName: 'LTD Shop',
    img: require('./assets/ga_bo_toi.png'),
  },
  {
    id: '3',
    title: 'Xe cần cẩu đa năng',
    shopName: 'Thế giới đồ chơi',
    img: require('./assets/xa_can_cau.png'),
  },
  {
    id: '4',
    title: 'Đồ chơi dạng mô hình',
    shopName: 'Thế giới đồ chơi',
    img: require('./assets/ga_bo_toi.png'),
  },
  {
    id: '5',
    title: 'Lãnh đạo đơn giản',
    shopName: 'Minh Long Book',
    img: require('./assets/lanh_dao_gian_don.png'),
  },
  {
    id: '6',
    title: 'Hiểu lòng trẻ con',
    shopName: 'Minh Long Book',
    img: require('./assets/hieu_long_con_tre.png'),
  },
  {
    id: '7',
    title: 'Donal Trump Thiên tài lãnh đạo',
    shopName: 'Minh Long Book',
    img: require('./assets/trump.png'),
  },
];

type ItemProps = {
  item: ItemData,
  onPress: () => void,
  backgroundColor: string,
  textColor: string,
};

const Item = ({ item, onPress, backgroundColor, textColor }: ItemProps) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.item, { backgroundColor }]}>
    <Image source={item.img} style={styles.img} />
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <View style={{ marginLeft: 10 }}>
        <Text style={[styles.paragraph, { color: textColor }]}>
          {item.title}
        </Text>
        <Text style={[styles.paragraph, { color: '#E83030' }]}>
          {item.shopName}
        </Text>
      </View>
      <TouchableOpacity style={styles.btn}>
        <Text style={{ color: '#fff' }}>Chat</Text>
      </TouchableOpacity>
    </View>
  </TouchableOpacity>
);

const App = () => {
  const [selectedId, setSelectedId] = useState(undefined);

  const renderItem = ({ item }: { item: ItemData }) => {
    const backgroundColor = item.id === selectedId ? '#fff' : '#dadada';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
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
        <Text style={{ color: '#fff', fontSize: 20 }}>Chat</Text>
        <TouchableOpacity>
          <Image
            source={require('./assets/bi_cart-check.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
      {/**Content */}
      <ScrollView>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
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
    flexDirection: 'row',
  },
  btn: {
    width: 80,
    height: 38,
    backgroundColor: '#F31111',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paragraph: {
    fontSize: 14,
    color: '#000',
  },
  img: {
    width: 74,
    height: 74,
  },
  icon: {
    width: 32,
    height: 32,
  },
});

export default App;
