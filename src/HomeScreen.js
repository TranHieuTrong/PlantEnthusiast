import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import {useDispatch, useSelector} from 'react-redux';
import {ViewProduct} from './reducers/HomeScreenSlice';
const HomeScreen = props => {
  const {navigation} = props;

  const handleNavigateToDetailScreen = (plantpots, plantingtools, _id) => {
    console.log('_id:', _id);
    navigation.navigate('DetailScreen', {plantpots, plantingtools, _id});
  };

  const handleCartScreenlScreen = () => {
    navigation.navigate('CartScreen');
  };
  const handleSeeMorePress = () => {
    navigation.navigate('ListPlantProduct', {crops: CROPS});
  };
  const handlePlantPotsPress = () => {
    const title = 'CHẬU CÂY';
    navigation.navigate('ListProduct', {title: title, plantpots: PLANTPOTS});
  };
  const handlePlantingToolsPress = () => {
    const title = 'PHỤ KIỆN CHĂM SÓC';
    navigation.navigate('ListProduct', {
      title: title,
      plantingtools: PLANTINGTOOLS,
    });
  };

  const dispatch = useDispatch();
  const {productsData} = useSelector(state => state.all);
  useEffect(() => {
    dispatch(ViewProduct());
  }, [dispatch]);
  useEffect(() => {
    console.log('Products Data:', productsData);
  }, [productsData]);
  const renderItemCrops = () => {
    const cropsPerRow = 2;
    const cropItems = [];

    for (let i = 0; i < productsData.slice(0, 4).length; i += cropsPerRow) {
      const rowItems = [];

      for (let j = 0; j < cropsPerRow; j++) {
        const index = i + j;
        if (index < productsData.slice(0, 4).length) {
          rowItems.push(
            <TouchableWithoutFeedback
              key={productsData[index]._id}
              onPress={() =>
                handleNavigateToDetailScreen(
                  productsData[index],
                  null,
                  productsData[index]._id,
                )
              }>
              <View style={{flex: 1, padding: 10}}>
                <Image
                  style={myStyles.cropImage}
                  source={{uri: productsData[index].image}}
                />
                <Text style={myStyles.cropName}>
                  {productsData[index].name}
                </Text>
                <Text style={myStyles.cropPrefer}>
                  {productsData[index].preferShade}
                </Text>
                <Text style={myStyles.cropPrice}>
                  {productsData[index].price}
                </Text>
              </View>
            </TouchableWithoutFeedback>,
          );
        } else {
          rowItems.push(<View key={j} style={{flex: 1}} />);
        }
      }

      cropItems.push(
        <View key={i / cropsPerRow} style={{flexDirection: 'row', flex: 1}}>
          {rowItems}
        </View>,
      );
    }

    return cropItems;
  };

  const renderItemPlantPots = () => {
    const plantpotsPerRow = 2;
    const plantpotItem = [];

    for (let i = 0; i < PLANTPOTS.slice(0, 4).length; i += plantpotsPerRow) {
      const rowItems = [];

      for (let j = 0; j < plantpotsPerRow; j++) {
        const index = i + j;
        if (index < PLANTPOTS.slice(0, 4).length) {
          rowItems.push(
            <TouchableWithoutFeedback
              key={PLANTPOTS[index].id}
              onPress={() => handleNavigateToDetailScreen(PLANTPOTS[index])}>
              <View style={myStyles.cropItem}>
                <Image
                  style={myStyles.cropImage}
                  source={PLANTPOTS[index].image}
                />
                <Text style={myStyles.cropName}>{PLANTPOTS[index].name}</Text>
                <Text style={myStyles.cropPrice}>{PLANTPOTS[index].price}</Text>
              </View>
            </TouchableWithoutFeedback>,
          );
        } else {
          rowItems.push(<View key={j} style={{flex: 1}} />);
        }
      }

      plantpotItem.push(
        <View key={i / plantpotsPerRow} style={{flexDirection: 'row', flex: 1}}>
          {rowItems}
        </View>,
      );
    }

    return plantpotItem;
  };

  const renderItemPlantingTools = () => {
    const plantingtoolsPerRow = 2;
    const plantingtoolsItem = [];

    for (
      let i = 0;
      i < PLANTINGTOOLS.slice(0, 4).length;
      i += plantingtoolsPerRow
    ) {
      const rowItems = [];

      for (let j = 0; j < plantingtoolsPerRow; j++) {
        const index = i + j;
        if (index < PLANTINGTOOLS.slice(0, 4).length) {
          rowItems.push(
            <TouchableWithoutFeedback
              key={PLANTINGTOOLS[index].id}
              onPress={() =>
                handleNavigateToDetailScreen(PLANTINGTOOLS[index])
              }>
              <View style={myStyles.cropItem}>
                <Image
                  style={myStyles.cropImage}
                  source={PLANTINGTOOLS[index].image}
                />
                <Text style={myStyles.cropName}>
                  {PLANTINGTOOLS[index].name}
                </Text>
                <Text style={myStyles.cropPrice}>
                  {PLANTINGTOOLS[index].price}
                </Text>
              </View>
            </TouchableWithoutFeedback>,
          );
        } else {
          rowItems.push(<View key={j} style={{flex: 1}} />);
        }
      }

      plantingtoolsItem.push(
        <View
          key={i / plantingtoolsPerRow}
          style={{flexDirection: 'row', flex: 1}}>
          {rowItems}
        </View>,
      );
    }

    return plantingtoolsItem;
  };
  return (
    <ScrollView style={myStyles.container}>
      <View style={myStyles.viewAllHeader}>
        <Image
          style={myStyles.imgBackground}
          source={require('../images/background.png')}
        />
        <View style={myStyles.viewHeader}>
          <View>
            <Text style={myStyles.viewHeaderText}>
              Planta - toả sáng không gian nhà bạn
            </Text>
            <TouchableOpacity style={myStyles.btnHeaderTextChil}>
              <Text style={myStyles.viewHTChil}>Xem hàng mới về</Text>
              <Image source={require('../images/righticon.png')} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={handleCartScreenlScreen}
            style={myStyles.btnCart}>
            <Image
              style={myStyles.iconCart}
              source={require('../images/cart.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        <View style={myStyles.viewProduct}>
          <View style={myStyles.viewFlatlist}>
            <Text style={myStyles.txtCrops}>Cây Trồng</Text>
            <ScrollView contentContainerStyle={{flexDirection: 'column'}}>
              {renderItemCrops()}
            </ScrollView>
            <TouchableOpacity
              onPress={handleSeeMorePress}
              style={myStyles.btnMore}>
              <Text style={myStyles.underline}>Xem thêm Cây trồng</Text>
            </TouchableOpacity>
          </View>
          <View style={myStyles.viewFlatlist}>
            <Text style={myStyles.txtPLANTPOTS}>Chậu Cây Trồng</Text>
            <ScrollView contentContainerStyle={{flexDirection: 'column'}}>
              {renderItemPlantPots()}
            </ScrollView>
            <TouchableOpacity
              onPress={handlePlantPotsPress}
              style={myStyles.btnMore}>
              <Text style={myStyles.underline}>Xem thêm Chậu cây</Text>
            </TouchableOpacity>
          </View>
          <View style={myStyles.viewFlatlist}>
            <Text style={myStyles.txtPLANTINGTOOLS}>Phụ kiện Trồng Cây</Text>
            <ScrollView contentContainerStyle={{flexDirection: 'column'}}>
              {renderItemPlantingTools()}
            </ScrollView>
            <TouchableOpacity
              onPress={handlePlantingToolsPress}
              style={myStyles.btnMore}>
              <Text style={myStyles.underline}>Xem thêm Phụ kiện</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={myStyles.txtPLANTINGTOOLS}>Combo chăm sóc (mới)</Text>
            <View style={myStyles.viewCombo}>
              <View style={myStyles.viewComboContent}>
                <Text style={myStyles.txtCBHeaderContent}>
                  Lemon Balm Grow Kit
                </Text>
                <Text style={myStyles.txtDesCB}>
                  Gồm: hạt giống Lemon Balm, gói đất hữu cơ, chậu Planta, marker
                  đánh dấu...
                </Text>
              </View>
              <Image
                style={myStyles.imgPlantCB}
                source={require('../images/plant.png')}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </ScrollView>
  );
};

export default HomeScreen;
const myStyles = StyleSheet.create({
  imgPlantCB: {
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  txtDesCB: {
    fontSize: 14,
    color: '#7d7b7b',
    marginTop: 2,
  },
  txtCBHeaderContent: {
    fontSize: 16,
    fontWeight: '500',
    color: '#221f1f',
    textAlign: 'left',
  },
  viewComboContent: {
    width: '55%',
    marginLeft: 24,
  },
  viewCombo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f6f6f6',
    borderRadius: 10,
    marginTop: 10,
  },
  btnMore: {
    marginTop: 17,
    marginBottom: 10,
    alignSelf: 'flex-end', // Căn phải
  },
  underline: {
    color: '#221f1f',
    fontWeight: '500',
    textAlign: 'left',
    textDecorationLine: 'underline',
  },
  viewProduct: {
    marginTop: 80,
    padding: 25,
  },
  txtPLANTPOTS: {
    fontSize: 24,
    fontWeight: '500',
    color: '#221f1f',
    textAlign: 'left',
  },
  txtPLANTINGTOOLS: {
    fontSize: 24,
    fontWeight: '500',
    color: '#221f1f',
    textAlign: 'left',
  },
  txtCrops: {
    fontSize: 24,
    fontWeight: '500',
    color: '#221f1f',
    textAlign: 'left',
  },
  cropItem: {
    flex: 1, //căn đều text
    marginTop: 10,
    alignItems: 'left',
    width: 155,
    height: 217,
    gap: 4,
    padding: 10,
    borderRadius: 8,
    marginBottom: 40,
  },
  cropImage: {
    width: 155,
    height: 155,
    borderRadius: 10,
    marginBottom: 4,
    backgroundColor: '#f6f6f6',
  },
  cropName: {
    fontSize: 16,
    color: '#221f1f',
    fontWeight: '500',
  },
  cropPrefer: {
    fontSize: 14,
    color: '#7d7b7b',
  },
  cropPrice: {
    fontSize: 16,
    color: '#007537',
  },
  viewAllHeader: {
    backgroundColor: '#f6f6f6',
  },
  imgBackground: {
    marginTop: 60,
    width: '100%',
    height: 205,
    resizeMode: 'cover',
    position: 'absolute',
  },
  btnCart: {
    width: 48,
    height: 46,
    borderRadius: 99999,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconCart: {
    width: 24,
    height: 24,
  },
  viewHTChil: {
    fontSize: 16,
    fontWeight: '500',
    color: '#007537',
    textAlign: 'left',
    marginRight: 10,
  },
  btnHeaderTextChil: {
    flexDirection: 'row',
    marginTop: 7,
  },
  viewHeaderText: {
    width: 232,
    height: 77,
    fontSize: 24,
    color: '#221f1f',
    fontWeight: '500',
    textAlign: 'left',
  },
  viewHeader: {
    padding: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 31,
  },
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: '#FFFFFF',
  },
});
const CROPS = [
  {
    id: 1,
    name: 'Spider Plant',
    preferShade: 'Ưa Bóng',
    price: '250.000',
    image: require('../images/plant1.png'),
    idCate: 4,
    origin: 'Việt Nam',
    size: 'Trung bình',
    quantity: 150,
    type: 'Cây Trồng',
  },
  {
    id: 2,
    name: 'Song of India',
    preferShade: 'Ưa Sáng',
    price: '250.000',
    image: require('../images/plant2.png'),
    idCate: 3,
    origin: 'Thái Lan',
    size: 'Lớn',
    quantity: 120,
    type: 'Cây Trồng',
  },
  {
    id: 3,
    name: 'Grey Star Calarthea',
    preferShade: 'Ưa Sáng',
    price: '250.000',
    image: require('../images/plant3.png'),
    idCate: 3,
    origin: 'Malaysia',
    size: 'Trung bình',
    quantity: 200,
    type: 'Cây Trồng',
  },
  {
    id: 4,
    name: 'Banana Plant',
    preferShade: 'Ưa Sáng',
    price: '250.000',
    image: require('../images/plant4.png'),
    idCate: 3,
    origin: 'Việt Nam',
    size: 'Nhỏ',
    quantity: 80,
    type: 'Cây Trồng',
  },
  {
    id: 5,
    name: 'Pothos',
    preferShade: 'Ưa Bóng',
    price: '150.000',
    image: require('../images/plant1.png'),
    idCate: 4,
    origin: 'Thái Lan',
    size: 'Trung bình',
    quantity: 100,
    type: 'Cây Trồng',
  },
  {
    id: 6,
    name: 'Snake Plant',
    preferShade: 'Ưa Bóng',
    price: '180.000',
    image: require('../images/plant2.png'),
    idCate: 4,
    origin: 'Việt Nam',
    size: 'Lớn',
    quantity: 60,
    type: 'Cây Trồng',
  },
  {
    id: 7,
    name: 'Monstera Deliciosa',
    preferShade: 'Ưa Bóng',
    price: '280.000',
    image: require('../images/plant3.png'),
    idCate: 3,
    origin: 'Malaysia',
    size: 'Lớn',
    quantity: 150,
    type: 'Cây Trồng',
  },
  {
    id: 8,
    name: 'ZZ Plant',
    preferShade: 'Ưa Bóng',
    price: '220.000',
    image: require('../images/plant2.png'),
    idCate: 4,
    origin: 'Thái Lan',
    size: 'Trung bình',
    quantity: 90,
    type: 'Cây Trồng',
  },
  {
    id: 9,
    name: 'Pothos',
    preferShade: 'Ưa Bóng',
    price: '150.000',
    image: require('../images/plant4.png'),
    idCate: 2,
    origin: 'Việt Nam',
    size: 'Nhỏ',
    quantity: 120,
    type: 'Cây Chiết',
  },
  {
    id: 10,
    name: 'Snake Plant',
    preferShade: 'Ưa Bóng',
    price: '180.000',
    image: require('../images/plant1.png'),
    idCate: 2,
    origin: 'Thái Lan',
    size: 'Lớn',
    quantity: 70,
    type: 'Cây Chiết',
  },
  {
    id: 11,
    name: 'Monstera Deliciosa',
    preferShade: 'Ưa Bóng',
    price: '280.000',
    image: require('../images/plant4.png'),
    idCate: 2,
    origin: 'Malaysia',
    size: 'Lớn',
    quantity: 100,
    type: 'Cây Chiết',
  },
  {
    id: 12,
    name: 'ZZ Plant',
    preferShade: 'Ưa Bóng',
    price: '220.000',
    image: require('../images/plant2.png'),
    idCate: 2,
    origin: 'Thái Lan',
    size: 'Trung bình',
    quantity: 80,
    type: 'Cây Chiết',
  },
  {
    id: 13,
    name: 'ZZ Plant',
    preferShade: 'Ưa Bóng',
    price: '220.000',
    image: require('../images/plant3.png'),
    idCate: 2,
    origin: 'Việt Nam',
    size: 'Nhỏ',
    quantity: 150,
    type: 'Cây Chiết',
  },
];

const PLANTPOTS = [
  {
    id: 1,
    name: 'Planta Trắng',
    price: '250.000',
    image: require('../images/plant5.png'),
    categoryId: 2,
  },
  {
    id: 2,
    name: 'Planta Lemon Balm',
    price: '250.000',
    image: require('../images/plant6.png'),
    categoryId: 2,
  },
  {
    id: 3,
    name: 'Planta Rosewood',
    price: '250.000',
    image: require('../images/plant7.png'),
    categoryId: 2,
  },
  {
    id: 4,
    name: 'Planta Dove Grey',
    price: '250.000',
    image: require('../images/plant8.png'),
    categoryId: 2,
  },
  {
    id: 5,
    name: 'Planta Trắng',
    price: '250.000',
    image: require('../images/plant5.png'),
    categoryId: 2,
  },
  {
    id: 6,
    name: 'Planta Lemon Balm',
    price: '250.000',
    image: require('../images/plant6.png'),
    categoryId: 2,
  },
  {
    id: 7,
    name: 'Planta Rosewood',
    price: '250.000',
    image: require('../images/plant7.png'),
    categoryId: 2,
  },
  {
    id: 8,
    name: 'Planta Dove Grey',
    price: '250.000',
    image: require('../images/plant8.png'),
    categoryId: 2,
  },
];
const PLANTINGTOOLS = [
  {
    id: 1,
    name: 'Bình tưới CB2 SAIC',
    price: '250.000',
    image: require('../images/plant9.png'),
    categoryId: 3,
  },
  {
    id: 2,
    name: 'Bình xịt Xiaoda',
    price: '250.000',
    image: require('../images/plant10.png'),
    categoryId: 3,
  },
  {
    id: 3,
    name: 'Bộ cuốc xẻng mini',
    price: '250.000',
    image: require('../images/plant11.png'),
    categoryId: 3,
  },
  {
    id: 4,
    name: 'Giá đỡ Finn Terrazzo',
    price: '250.000',
    image: require('../images/plant12.png'),
    categoryId: 3,
  },
  {
    id: 5,
    name: 'Bình tưới CB2 SAIC',
    price: '250.000',
    image: require('../images/plant9.png'),
    categoryId: 3,
  },
  {
    id: 6,
    name: 'Bình xịt Xiaoda',
    price: '250.000',
    image: require('../images/plant10.png'),
    categoryId: 3,
  },
  {
    id: 7,
    name: 'Bộ cuốc xẻng mini',
    price: '250.000',
    image: require('../images/plant11.png'),
    categoryId: 3,
  },
  {
    id: 8,
    name: 'Giá đỡ Finn Terrazzo',
    price: '250.000',
    image: require('../images/plant12.png'),
    categoryId: 3,
  },
];
