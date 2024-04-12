import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

const Card = () => {
  const navigation = useNavigation();

  //normal
  const [locationNormal, setlocationNormal] = useState('');
  const [phoneNormal, setphoneNormal] = useState('');
  //error
  const [locationError, setlocationError] = useState('');
  const [phoneError, setphoneError] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);

  const handleButtonContinue = () => {
    // Đặt trạng thái modalVisible thành true để hiển thị modal
    setModalVisible(true);
  };

  const handleConfirmPayment = () => {
    // Xử lý logic khi người dùng xác nhận thanh toán
    // Đóng modal
    setModalVisible(false);
  };

  const handleCancel = () => {
    // Đóng modal
    setModalVisible(false);
  };

  const handleButtonYes = () => {
    setPaymentConfirmed(true);
  };
  const handleButtonViewPlant = () => {
    setPaymentConfirmed(false);
  };
  const handleBackHome = () => {
    navigation.navigate('Home');
  };

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
  };
  const handleGoBackPress = () => {
    navigation.goBack();
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
        <View style={myStyles.titleCenter}>
          <Text style={myStyles.title}>THANH TOÁN</Text>
        </View>
      </View>
      <ScrollView>
        <View>
          <Text style={myStyles.txtInfoClient}>Nhập thông tin thẻ</Text>
          <View style={myStyles.viewLine}>
            <View style={myStyles.line} />
          </View>
          <TextInput
            placeholder="XXXX XXXX XXXX XXXX"
            placeholderTextColor={'#7d7b7b'}
            value={locationNormal}
            onChangeText={data => changeTextLocation(data)}
          />
          <View style={myStyles.line} />
          <TextInput
            placeholder="TRAN HIEU TRONG"
            placeholderTextColor={'#7d7b7b'}
          />
          <View style={myStyles.line} />
          <TextInput placeholder="10/25" placeholderTextColor={'#7d7b7b'} />
          <View style={myStyles.line} />
          <TextInput placeholder="CVV" placeholderTextColor={'#7d7b7b'} />
          <View style={myStyles.line} />
          <View>
            <Text style={myStyles.txtInfoClient}>Thông tin khách hàng</Text>
            <Text style={myStyles.txtInfoClient}>chỉnh sửa</Text>
          </View>
          <Text style={myStyles.txtTextInfo}>Trần Hiếu Trọng</Text>
          <Text style={myStyles.txtTextInfo}>tranhieutrong@gmail.com</Text>
          <Text style={myStyles.txtTextInfo}>
            Củ Chi, thành phố Hồ Chí Minh
          </Text>
          <Text style={myStyles.txtTextInfo}>0123456789</Text>
          <Text style={myStyles.txtInfoClient}>Phương thức vận chuyển</Text>

          <Text style={myStyles.txtTextInfo}>Giao hàng nhanh - 15.000đ</Text>
          <Text style={myStyles}>Dự kiến giao hàng 5-7/9</Text>
          <Text style={myStyles.txtTextInfo}>Hình thức thanh toán</Text>
          <Text style={myStyles.txtPaymentCard}>Thẻ VISA/MASTERCARD</Text>
          <Text style={myStyles.txtTextInfo}>Đơn hàng đã chọn</Text>
        </View>
      </ScrollView>

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
        <TouchableOpacity
          style={myStyles.btnPayment}
          onPress={handleButtonContinue}>
          <Text style={myStyles.txtBtnPayment}>TIẾP TỤC</Text>
        </TouchableOpacity>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(false);
          }}>
          <View style={myStyles.centeredView}>
            <View style={myStyles.modalView}>
              <Text style={myStyles.modalText}>Xác nhận thanh toán</Text>

              <TouchableOpacity
                style={myStyles.confirmButton}
                onPress={handleButtonYes}>
                <Text style={myStyles.confirmButtonText}>Đồng ý</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={myStyles.cancelButton}
                onPress={handleCancel}>
                <Text style={myStyles.cancelButtonText}>Hủy bỏ</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <Modal
          animationType="slide"
          transparent={true}
          visible={paymentConfirmed}
          onRequestClose={() => {
            setPaymentConfirmed(false);
          }}>
          <View style={myStyles.centeredView}>
            <View style={myStyles.modalView}>
              <View style={myStyles.viewTotolDone}>
                <Text style={myStyles.txtTotalDone}>Đã thanh toán</Text>
                <Text style={myStyles.txtTotalPrice}>515.000đ</Text>
              </View>

              <TouchableOpacity
                style={myStyles.confirmButton}
                onPress={handleButtonViewPlant}>
                <Text style={myStyles.confirmButtonText}>
                  Xem Cẩm nang trồng cây
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={myStyles.cancelButton}
                onPress={handleBackHome}>
                <Text style={myStyles.cancelButtonText}>Quay về Trang chủ</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default Card;
const myStyles = StyleSheet.create({
  viewTotolDone: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  txtTotalDone: {
    fontSize: 16,
    color: '#000000',
    fontWeight: '500',
  },

  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    // alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 2,
    padding: 35,
    // alignItems: 'center',
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color: '#252a31',
    fontSize: 16,
  },
  confirmButton: {
    width: '100%',
    backgroundColor: '#007537',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 4,
    alignItems: 'center',
  },
  confirmButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  cancelButton: {
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 4,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#221f1f',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
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
    backgroundColor: '#FFFFFF',
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
