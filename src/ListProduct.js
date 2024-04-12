import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

const ListProduct = ({route}) => {
  const {title, plantpots, plantingtools} = route.params;
  const navigation = useNavigation();
  const handleBackHomePress = () => {
    navigation.navigate('HomeScreen');
  };
  const renderItemPlantPots = ({item}) => (
    <TouchableOpacity style={myStyles.cropItem}>
      <Image style={myStyles.cropImage} source={item.image} />
      <Text style={myStyles.cropName}>{item.name}</Text>
      <Text style={myStyles.cropPrice}>{item.price}</Text>
    </TouchableOpacity>
  );
  const renderItemPlantingTools = ({item}) => (
    <TouchableOpacity style={myStyles.cropItem}>
      <Image style={myStyles.cropImage} source={item.image} />
      <Text style={myStyles.cropName}>{item.name}</Text>
      <Text style={myStyles.cropPrice}>{item.price}</Text>
    </TouchableOpacity>
  );
  return (
    <View style={myStyles.container}>
      <View style={myStyles.viewHeader}>
        <TouchableOpacity onPress={handleBackHomePress}>
          <Image
            style={myStyles.imgIcBack}
            source={require('../images/ic_back.png')}
          />
        </TouchableOpacity>
        <Text style={myStyles.txtPlant}>{title}</Text>
        <TouchableOpacity>
          <Image
            style={myStyles.imgIcBack}
            source={require('../images/cart.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={myStyles.viewProduct}>
        <View style={myStyles.viewFlatlist}>
          <FlatList
            data={plantpots}
            renderItem={renderItemPlantPots}
            keyExtractor={item => item.id.toString()}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          />
          <FlatList
            data={plantingtools}
            renderItem={renderItemPlantingTools}
            keyExtractor={item => item.id.toString()}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    </View>
  );
};

export default ListProduct;
const myStyles = StyleSheet.create({
  viewFlatlist: {
    marginBottom: '20%',
  },
  cropItem: {
    flex: 1, //căn đều text
    marginTop: 15,
    alignItems: 'left',
    width: 155,
    height: 217,
    gap: 4,
    padding: 10,
    borderRadius: 8,
    marginBottom: 50,
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
  selectedCategoryText: {
    color: '#FFFFFF', // Màu chữ khi được chọn
  },
  categoryText: {
    color: '#7d7b7b', // Màu chữ mặc định
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  categoryItem: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 10,
    paddingTop: 10,
    borderRadius: 4,
  },
  selectedCategoryItem: {
    backgroundColor: '#009245',
    borderColor: '#009245',
  },
  imgIcBack: {
    width: 24,
    height: 24,
  },
  txtPlant: {
    fontSize: 16,
    fontWeight: '500',
    color: '#221f1f',
    fontStyle: 'normal',
  },
  viewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  container: {
    backgroundColor: '#FFFFFF',
    padding: 24,
  },
});
const CATEGORY = [
  {
    idCate: 1,
    name: 'Tất cả',
  },
  {
    idCate: 2,
    name: 'Hàng mới về',
  },
  {
    idCate: 3,
    name: 'Ưa sáng',
  },
  {
    idCate: 4,
    name: 'Ưa bóng',
  },
];
