import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

import {useDispatch, useSelector} from 'react-redux';
import {GetDanhMuc} from './reducers/CategorySlice';
import {ViewProduct} from './reducers/HomeScreenSlice';

const ListPlantProduct = ({route}, props) => {
  const {crops} = route.params;
  //   const {navigation} = props;
  const navigation = useNavigation();

  const [selectedCategory, setSelectedCategory] = useState(1);
  const handleBackHomePress = () => {
    navigation.navigate('HomeScreen');
  };
  const handleNavigateToDetailScreen = crop => {
    navigation.navigate('DetailScreen', {crop: crop});
  };

  const handleCategoryPress = categoryId => {
    setSelectedCategory(categoryId);
  };
  const filteredCrops =
    selectedCategory === 1
      ? crops
      : crops.filter(item => item.idCate === selectedCategory);

  const dispatch = useDispatch();
  const {categoryData, categoryStatus} = useSelector(state => state.danhmuc);
  const {productsData} = useSelector(state => state.all);

  useEffect(() => {
    dispatch(ViewProduct());
    dispatch(GetDanhMuc());

    console.log(categoryData);
  }, [dispatch]);

  const renderItemCrops = ({item}) => (
    <TouchableOpacity
      style={myStyles.cropItem}
      onPress={() => handleNavigateToDetailScreen(item)}>
      <Image style={myStyles.cropImage} source={{uri: item.image}} />
      <Text style={myStyles.cropName}>{item.name}</Text>
      <Text style={myStyles.cropPrefer}>{item.preferShade}</Text>
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
        <Text style={myStyles.txtPlant}>CÂY TRỒNG</Text>
        <TouchableOpacity>
          <Image
            style={myStyles.imgIcBack}
            source={require('../images/cart.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={myStyles.categoryContainer}>
        {CATEGORY.map(item => (
          <TouchableOpacity
            key={item.idCate}
            style={[
              myStyles.categoryItem,
              selectedCategory === item.idCate && myStyles.selectedCategoryItem,
            ]}
            onPress={() => handleCategoryPress(item.idCate)}>
            <Text
              style={[
                myStyles.categoryText,
                selectedCategory === item.idCate &&
                  myStyles.selectedCategoryText,
              ]}>
              {item.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      {/* <FlatList
        data={categoryData}
        keyExtractor={item => item._id}
        renderItem={({item}) => <Text>{item.name}</Text>}
        horizontal={true}
      /> */}
      <View style={myStyles.viewProduct}>
        <View style={myStyles.viewFlatlist}>
          <FlatList
            data={productsData}
            renderItem={renderItemCrops}
            keyExtractor={item => item._id}
            numColumns={2} // hiển thị 2 cột
            showsVerticalScrollIndicator={false} // Ẩn thanh cuộn dọc
            showsHorizontalScrollIndicator={false} // Ẩn thanh cuộn ngang (nếu có)
          />
        </View>
      </View>
    </View>
  );
};

export default ListPlantProduct;
const myStyles = StyleSheet.create({
  viewFlatlist: {
    marginBottom: '50%',
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
