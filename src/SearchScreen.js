import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
} from 'react-native';

import React, {useState} from 'react';

import {useDispatch, useSelector} from 'react-redux';
import {searchProducts, setSearch} from '../src/reducers/searchSlide';

const Search = ({navigation}) => {
  const search = useSelector(state => state.search.search); // Lấy giá trị search từ store Redux
  const status = useSelector(state => state.search.status); // Lấy trạng thái tìm kiếm từ store Redux
  const dispatch = useDispatch();
  const searchResults = useSelector(state => state.search.searchResults);

  const searchData = () => {
    console.log('Đang tìm kiếm:', search);
    console.log('Trạng thái:', status); // Xuất trạng thái tìm kiếm
    dispatch(searchProducts(search));
  };

  const goToProductDetail = (productId, crop) => {
    // Điều hướng đến trang chi tiết sản phẩm với productId được chọn
    navigation.navigate('DetailScreen', {productId, crop});
  };

  const back = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <View style={styles.Title}>
        <TouchableOpacity onPress={back}>
          <Image
            source={require('../images/ic_back.png')}
            style={{width: 35, height: 35}}
          />
        </TouchableOpacity>
        <Text style={styles.textTitle}>TÌM KIẾM</Text>
        <View style={{width: 35, height: 35}} />
      </View>

      <View style={styles.Search}>
        <Image
          source={require('../images/search.png')}
          style={{width: 30, height: 30}}
        />
        <TextInput
          style={styles.textInput}
          onChangeText={text => dispatch(setSearch(text))} // Cập nhật giá trị search trong store Redux
          placeholder="Tìm kiếm"
          placeholderTextColor={'gray'}
          value={search}
          onSubmitEditing={searchData} // Gọi searchData khi người dùng nhấn Enter
        />
        <TouchableOpacity onPress={searchData}>
          <Text style={styles.buttonText}>Tìm kiếm</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={searchResults}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => goToProductDetail(item._id)}>
            {/* {' '} */}
            <View style={styles.SP}>
              <Image
                source={{uri: item.image}}
                style={{width: 100, height: 100}}
              />
              <View style={styles.Infor}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.text}>{item.name} | </Text>
                  <Text style={{marginTop: 4}}>Ưa bóng</Text>
                </View>
                <Text style={styles.text2}>
                  {parseInt(item.price).toLocaleString('vi-VN', {
                    style: 'currency',
                    currency: 'VND',
                  })}
                </Text>
                <Text style={styles.text1}>Còn {item.size} sp</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={item => item._id.toString()}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  buttonText: {
    color: 'green',
    fontSize: 18,
    fontWeight: 'bold',
  },
  Infor: {
    flexDirection: 'column',
    marginLeft: 30,
  },
  SP: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  text2: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'normal',
    marginVertical: 3,
  },
  text1: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'normal',
  },
  text: {
    color: 'green',
    fontSize: 18,
    fontWeight: 'bold',
  },
  Search: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'green',
    marginTop: 30,
  },
  textInput: {
    paddingLeft: 15,
    fontSize: 18,
    flex: 1,
  },
  textTitle: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'normal',
  },
  Title: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 25,
  },
});
