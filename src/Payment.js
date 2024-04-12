import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

const Payment = () => {
  const navigation = useNavigation();

  //normal
  const [locationNormal, setlocationNormal] = useState('');
  const [phoneNormal, setphoneNormal] = useState('');
  //error
  const [locationError, setlocationError] = useState('');
  const [phoneError, setphoneError] = useState('');

  const changeTextLocation = data => {
    setlocationNormal(data);
    setlocationError('');
  };
  const changeTextPhone = data => {
    setphoneNormal(data);
    setphoneError('');
  };
  const ButtonContinue = () => {
    if (locationNormal == '') {
      setlocationError('Vui lòng nhập địa chỉ');
    }
    if (locationNormal == '') {
      setphoneError('Vui lòng nhập số điện thoại');
    }
    navigation.navigate('Card');
  };
  return (
    <View style={myStyles.container}>
      <View style={myStyles.containerHeader}>
        <TouchableOpacity style={myStyles.iconContainer}>
          <Image
            style={myStyles.icon}
            source={require('../images/ic_back.png')}
          />
        </TouchableOpacity>
        <View style={myStyles.titleCenter}>
          <Text style={myStyles.title}>THANH TOÁN</Text>
        </View>
      </View>

      <View>
        <Text style={myStyles.txtInfoClient}>Thông tin khách hàng</Text>
        <View style={myStyles.viewLine}>
          <View style={myStyles.line} />
        </View>
        <Text style={myStyles.txtTextInfo}>Trần Hiếu Trọng</Text>
        <View style={myStyles.viewLine}>
          <View style={myStyles.line} />
        </View>
        <Text style={myStyles.txtTextInfo}>tranhieutrong@gmail.com</Text>
        <View style={myStyles.viewLine}>
          <View style={myStyles.line} />
        </View>
        <TextInput
          placeholder="Địa chỉ"
          placeholderTextColor={'#7d7b7b'}
          value={locationNormal}
          onChangeText={data => changeTextLocation(data)}
        />
        <View style={myStyles.line} />
        {!!locationError && (
          <Text style={myStyles.txtTitle_error}>{locationError}</Text>
        )}
        <TextInput
          placeholder="Số điện thoại"
          placeholderTextColor={'#7d7b7b'}
          value={phoneNormal}
          onChangeText={data => changeTextPhone(data)}
        />
        <View style={myStyles.line} />
        {!!phoneError && (
          <Text style={myStyles.txtTitle_error}>{phoneError}</Text>
        )}

        <Text style={myStyles.txtInfoClient}>Phương thức vận chuyển</Text>
        <View style={myStyles.viewLine}>
          <View style={myStyles.line} />
        </View>
        <Text style={myStyles.txtGH}>Giao hàng nhanh - 15.000đ</Text>
        <Text style={myStyles}>Dự kiến giao hàng 5-7/9</Text>
        <View style={myStyles.viewLine}>
          <View style={myStyles.line} />
        </View>
        <Text style={myStyles.txtGH}>Giao hành COD - 20.000đ</Text>
        <Text style={myStyles}>Dự kiến giao hàng 4-8/9</Text>
        <View style={myStyles.viewLine}>
          <View style={myStyles.line} />
        </View>
        <Text style={myStyles.txtInfoClient}>Hình thức thanh toán</Text>
        <View style={myStyles.viewLine}>
          <View style={myStyles.line} />
        </View>
        <Text style={myStyles.txtPaymentCard}>Thẻ VISA/MASTERCARD</Text>
        <View style={myStyles.viewLine}>
          <View style={myStyles.line} />
        </View>
      </View>
      <View style={myStyles.viewContainerTotal}>
        <View style={myStyles.viewPriceTotal}>
          <Text style={myStyles.txtTotal}>Tạm tính</Text>
          <Text style={myStyles.txtTotalPrice}>500.000đ</Text>
        </View>
        <View style={myStyles.viewPriceTotal}>
          <Text style={myStyles.txtTotal}>Phí vận chuyển</Text>
          <Text style={myStyles.txtTotalPrice}>15.000đ</Text>
        </View>
        <View style={myStyles.viewPriceTotal}>
          <Text style={myStyles.txtTotal}>Tổng cộng</Text>
          <Text style={myStyles.txtTotalPrice}>515.000đ</Text>
        </View>
        <TouchableOpacity style={myStyles.btnPayment} onPress={ButtonContinue}>
          <Text style={myStyles.txtBtnPayment}>Tiến hành thanh toán</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Payment;
const myStyles = StyleSheet.create({
  txtTitle_error: {
    color: 'red',
  },
  txtPaymentCard: {
    marginTop: 15,
    fontSize: 16,
    color: '#007537',
    fontWeight: '500',
  },
  txtGH: {
    marginTop: 20,
    color: '#007537',
    fontWeight: 'normal',
    fontSize: 14,
  },
  txtTextInfo: {
    marginTop: 20,
    fontSize: 14,
    color: '#7d7b7b',
    fontWeight: '500',
  },
  txtInfoClient: {
    marginTop: 15,
    fontSize: 16,
    color: '#221f1f',
    fontWeight: '500',
  },
  viewPriceTotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
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
    flex: 1,
    justifyContent: 'flex-end',
    // position: 'absolute',
    // bottom: 0,
    // left: 0,
    // right: 0,
    // padding: 20,
  },
  viewLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
  },
  line: {
    height: 1,
    backgroundColor: '#221f1f',
    width: '100%',
  },
  titleCenter: {
    flex: 1,
    alignItems: 'center',
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
