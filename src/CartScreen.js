import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const CartScreen = ({route}) => {
  const navigation = useNavigation();

  const [hasItems, setHasItems] = useState(true);
  const {_id, product, quantity} = route.params;
  const [isChecked, setIsChecked] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = productToAdd => {
    setCartItems([...cartItems, productToAdd]);
  };

  const handleDeletePress = () => {
    setShowConfirmation(true);
  };

  const handleConfirmDelete = () => {
    const updatedCartItems = cartItems.filter(item => item._id !== _id);
    setCartItems(updatedCartItems);
    setShowConfirmation(false);
    Alert.alert('Thành công', 'Sản phẩm đã được xóa thành công.');
  };

  const handleCancelDelete = () => {
    setShowConfirmation(false);
  };

  const handleCheckboxPress = () => {
    setIsChecked(!isChecked);
  };

  const increaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  const handleGoBackPress = () => {
    navigation.goBack();
  };

  const calculateTotalPrice = () => {
    let totalPrice = isChecked ? parseFloat(product.price) * quantity : 0;
    return totalPrice;
  };

  const handleCheckout = () => {
    navigation.navigate('Payment');
  };

  return (
    <View style={myStyles.container}>
      <View style={myStyles.containerHeader}>
        <TouchableOpacity
          onPress={handleGoBackPress}
          style={myStyles.iconContainer}>
          <Image
            style={myStyles.icon}
            source={require('../images/ic_back.png')}
          />
        </TouchableOpacity>
        <Text style={myStyles.title}>GIỎ HÀNG</Text>
        <TouchableOpacity
          onPress={handleDeletePress}
          style={myStyles.iconContainer}>
          <Image
            style={myStyles.icon}
            source={require('../images/trash.png')}
          />
        </TouchableOpacity>
      </View>
      {hasItems ? (
        <View style={myStyles.viewProductList}>
          <TouchableOpacity onPress={handleCheckboxPress}>
            <Image
              style={myStyles.imgCheckbox}
              source={
                isChecked
                  ? require('../images/checkbox.png')
                  : require('../images/uncheckbox.png')
              }
            />
          </TouchableOpacity>

          {product && product.image && (
            <Image
              style={myStyles.imgPlantProduct}
              source={{uri: product.image}}
            />
          )}

          <View>
            <View style={myStyles.viewNameProduct}>
              <Text style={myStyles.txtName}>{product && product.name}</Text>
              <Text style={myStyles.txtOr}> | </Text>
              <Text style={myStyles.txtPrefe}>
                {product && product.preferShade}
              </Text>
            </View>
            <Text style={myStyles.txtPrice}>{product && product.price}</Text>
            <View style={myStyles.viewSelectProductQuantity}>
              <TouchableOpacity
                onPress={decreaseQuantity}
                style={myStyles.btnMinusPlus}>
                <Text style={myStyles.txtQuantity}>-</Text>
              </TouchableOpacity>
              <Text>{quantity}</Text>
              <TouchableOpacity
                onPress={increaseQuantity}
                style={myStyles.btnMinusPlus}>
                <Text style={myStyles.txtQuantity}>+</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleDeletePress}>
                <Text style={myStyles.txtDelete}>Xóa</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ) : (
        <View style={myStyles.viewCartNull}>
          <Text style={myStyles.txtCartNull}>
            Giỏ hàng của bạn hiện đang trống
          </Text>
        </View>
      )}
      {isChecked && (
        <View style={myStyles.viewContainerTotal}>
          <View style={myStyles.viewPriceTotal}>
            <Text style={myStyles.txtTotal}>Tạm tính</Text>
            <Text style={myStyles.txtTotalPrice}>
              {calculateTotalPrice()}.000đ
            </Text>
          </View>
          <TouchableOpacity
            style={myStyles.btnPayment}
            onPress={handleCheckout}>
            <Text style={myStyles.txtBtnPayment}>Tiến hành thanh toán</Text>
          </TouchableOpacity>
        </View>
      )}
      {showConfirmation && (
        <View style={myStyles.viewAllYesNo}>
          <View style={myStyles.viewYesNo}>
            <Text style={myStyles.txtOK}>Xác nhận xóa tất cả đơn hàng?</Text>
            <Text style={myStyles.txtOK1}>
              Thao tác này sẽ không thể khôi phục.
            </Text>
          </View>
          <View style={myStyles.buttonContainer}>
            <TouchableOpacity
              style={myStyles.btnYes}
              onPress={handleConfirmDelete}>
              <Text style={myStyles.buttonText}>Đồng ý</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={myStyles.btnCancel}
              onPress={handleCancelDelete}>
              <Text style={myStyles.buttonTextCancel}>Hủy Bỏ</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default CartScreen;
const myStyles = StyleSheet.create({
  viewAllYesNo: {
    marginLeft: 25,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  viewYesNo: {
    alignSelf: 'center',
  },
  buttonContainer: {
    justifyContent: 'center',
    marginTop: 20,
  },
  btnYes: {
    alignItems: 'center',
    backgroundColor: '#007537',
    padding: 10,
    borderRadius: 5,
  },
  btnCancel: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
  },
  buttonTextCacel: {
    color: '#221f1f',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  buttonText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '500',
  },
  txtOK1: {
    fontSize: 14,
    fontWeight: 'normal',
    color: '#7d7b7b',
  },
  txtOK: {
    fontSize: 16,
    fontWeight: '500',
    color: '#252a31',
  },
  btnPayment: {
    backgroundColor: '#007537',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
  },
  txtBtnPayment: {
    color: 'white',
    fontWeight: 'normal',
    fontSize: 18,
  },
  txtTotalPrice: {
    fontSize: 16,
    color: '#000000',
    fontWeight: '500',
  },
  txtTotal: {
    fontSize: 14,
    color: '#000000',
    fontWeight: 'normal',
  },
  viewContainerTotal: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    // backgroundColor: 'white',
    // borderTopWidth: 1,
    // borderTopColor: '#ccc',
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'center',
  },
  viewPriceTotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  txtDelete: {
    fontSize: 16,
    color: '#000000',
    textDecorationLine: 'underline',
    fontWeight: '500',
  },
  txtQuantity: {
    paddingTop: 2,
    paddingLeft: 8,
    paddingBottom: 2,
    paddingRight: 8,
    fontSize: 16,
  },
  viewSelectProductQuantity: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    left: '-20%',
  },
  btnMinusPlus: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 4,
    // padding: 4,
    // marginHorizontal: 5,
  },
  txtPrice: {
    left: '-13%',
    fontSize: 16,
    fontWeight: '500',
    color: '#007537',
    textAlign: 'left',
  },
  txtName: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'left',
  },
  txtOr: {
    color: '#000000',
  },
  txtPrefe: {
    fontSize: 14,
    color: '#7d7b7b',
  },
  viewProductList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  viewNameProduct: {
    left: '-20%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginTop: 50,
  },
  imgPlantProduct: {
    left: '-10%',
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  imgCheckbox: {
    width: 25,
    height: 25,
  },
  viewCartNull: {
    marginTop: 15,
    alignItems: 'center',
  },
  txtCartNull: {
    alignItems: 'center',
    fontSize: 14,
    color: '#000000',
  },
  title: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '500',
    color: '#000000',
  },
  icon: {
    width: 25,
    height: 25,
  },
  containerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconContainer: {
    width: 25,
    alignItems: 'center',
  },
  container: {
    padding: 24,
    backgroundColor: '#ffffff',
    flex: 1,
  },
});
