import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {getProductById} from '../src/reducers/ProductSlice';
import {useSelector, useDispatch} from 'react-redux';

const DetailScreen = ({route}) => {
  const {crop, _id} = route.params;
  const [quantity, setQuantity] = useState(1);
  const navigation = useNavigation();
  const {productData, productStatus, productError} = useSelector(
    state => state.product,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductById(_id));
  }, [_id, dispatch]);

  useEffect(() => {
    if (productStatus !== 'idle') {
      console.log('productData:', productData);
      console.log('productStatus:', productStatus);
    }
  }, [productData, productStatus, productError]);

  const handleAddToCart = () => {
    console.log('_id:', _id);
    navigation.navigate('CartScreen', {
      _id: _id,
      product: productData,
      quantity: quantity,
    });
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const calculateTotalPrice = () => {
    if (productData && productData.price) {
      const totalPrice = parseFloat(productData.price) * quantity;
      const formattedPrice = totalPrice.toFixed(0);
      return formattedPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
    return '0';
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleBackListPlantProductPress = () => {
    navigation.goBack();
  };
  return (
    <View style={myStyles.container}>
      <View style={myStyles.viewHeader}>
        <TouchableOpacity onPress={handleBackListPlantProductPress}>
          <Image
            style={myStyles.imgIcBack}
            source={require('../images/ic_back.png')}
          />
        </TouchableOpacity>
        <Text style={myStyles.txtPlant}>
          {productData ? productData.name : 'Unknown'}
        </Text>
        <TouchableOpacity>
          <Image
            style={myStyles.imgIcBack}
            source={require('../images/cart.png')}
          />
        </TouchableOpacity>
      </View>
      {productData && (
        <View>
          <Image
            style={myStyles.imgPlant}
            source={{
              uri: productData.image || 'https://via.placeholder.com/150',
            }}
          />
          <View style={myStyles.viewChevron}>
            <Image source={require('../images/fi_chevron-left.png')} />
            <Image source={require('../images/fi_chevron-right.png')} />
          </View>
          <View style={myStyles.viewCategory}>
            <View style={myStyles.viewPlantCategory}>
              <Text style={myStyles.txtPlantCategory}>Cây trồng</Text>
            </View>
            <View style={myStyles.viewPlantCategory}>
              <Text style={myStyles.txtPlantCategory}>
                {productData.preferShade || 'Unknown'}
              </Text>
            </View>
          </View>
          <View style={myStyles.detailsProductList}>
            <Text style={myStyles.txtPrictProduct}>
              {productData.price ? `${productData.price}đ` : ''}
            </Text>
            <Text style={myStyles.detailProductText}>Chi tiết sản phẩm</Text>
            <View style={myStyles.horizontalLine}></View>
            <View style={myStyles.detailsProduct}>
              <Text style={myStyles.sizeOriginStatusProductText}>Kích cỡ</Text>
              <Text style={myStyles.sizeOriginStatusProductText}>
                {productData.size || 'Unknown'}
              </Text>
            </View>
            <View style={myStyles.horizontalLine1}></View>
            <View style={myStyles.detailsProduct}>
              <Text style={myStyles.sizeOriginStatusProductText}>Xuất xứ</Text>
              <Text style={myStyles.sizeOriginStatusProductText}>
                {productData.origin || 'Unknown'}
              </Text>
            </View>
            <View style={myStyles.horizontalLine1}></View>
            <View style={myStyles.detailsProduct}>
              <Text style={myStyles.sizeOriginStatusProductText}>
                Tình trạng
              </Text>
              <Text style={myStyles.sizeOriginStatusProductText}>
                {productData.status ? `Còn ${productData.status} sp` : ''}
              </Text>
            </View>
            <View style={myStyles.horizontalLine1}></View>
          </View>
        </View>
      )}
      <View>
        <View style={myStyles.viewSelectProduct}>
          <Text>Đã chọn {quantity} sản phẩm</Text>
          <Text>Tạm tính</Text>
        </View>
        <View style={myStyles.viewSelectProductTotal}>
          <View style={myStyles.viewSelectProductQuantity}>
            <TouchableOpacity
              style={myStyles.txtQuantityMinusPlus}
              onPress={decreaseQuantity}>
              <Text style={myStyles.txtQuantity}>-</Text>
            </TouchableOpacity>
            <Text style={myStyles.txtQuantity0}>{quantity}</Text>
            <TouchableOpacity
              style={myStyles.txtQuantityMinusPlus}
              onPress={increaseQuantity}>
              <Text style={myStyles.txtQuantity}>+</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={myStyles.txtPriceSelect}>
              {calculateTotalPrice()}đ
            </Text>
          </View>
        </View>
        <TouchableOpacity style={myStyles.buyButton} onPress={handleAddToCart}>
          <Text style={myStyles.buyButtonText}>CHỌN MUA</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DetailScreen;
const myStyles = StyleSheet.create({
  detailsProductList: {
    padding: 18,
  },
  buyButton: {
    height: 50,
    marginTop: 15,
    backgroundColor: '#ababab',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  buyButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  txtPriceSelect: {
    fontSize: 24,
    color: '#000000',
  },
  viewSelectProductTotal: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  viewSelectProductQuantity: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtQuantityMinusPlus: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 4,
    // padding: 4,
    // marginHorizontal: 5,
  },
  txtQuantity0: {
    marginLeft: 20,
    marginRight: 20,
    fontSize: 24,
    color: '#000000',
  },
  txtQuantity: {
    paddingTop: 3,
    paddingLeft: 10,
    paddingBottom: 3,
    paddingRight: 10,
    fontSize: 16,
  },
  viewSelectProductQuantity: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  viewSelectProduct: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
    marginTop: 20,
  },
  txtPrictProduct: {
    marginTop: 15,
    fontSize: 25,
    fontWeight: 'bold',
    color: '#007537',
    lineHeight: 34,
  },
  detailsProduct: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sizeOriginStatusProductText: {
    fontSize: 14,
    fontWeight: 'normal',
    marginTop: 15,
    // marginRight: 10,
  },
  detailProductContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailProductText: {
    fontSize: 16,
    fontWeight: '500',
    marginTop: 15,
  },
  horizontalLine1: {
    height: 1,
    backgroundColor: '#ababab',
  },
  horizontalLine: {
    height: 1,
    backgroundColor: '#221f1f',
  },
  viewPlantCategory: {
    width: 76,
    height: 28,
    backgroundColor: '#009245',
    padding: 5,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  txtPlantCategory: {
    color: 'white',
  },
  viewCategory: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    // alignItems: 'center',
    marginLeft: 18,
  },
  imgPlant: {
    width: 337,
    height: 270,
    resizeMode: 'contain',
  },
  viewChevron: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // position: 'absolute',
    top: '-40%',
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
    backgroundColor: '#f6f6f6',
    padding: 24,
  },
});
