import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const UserScreen = () => {
  const navigation = useNavigation();

  const btnEditinfo = () => {
    navigation.navigate('EditInfomation');
  };
  const btnQA = () => {
    navigation.navigate('QA');
  };
  return (
    <View style={myStyles.container}>
      <View style={myStyles.containerHeader}>
        <View style={myStyles.titleCenter}>
          <Text style={myStyles.title}>PROFILE</Text>
        </View>
      </View>
      <View style={myStyles.viewIconProfile}>
        <Image
          style={myStyles.iconAvata}
          source={require('../images/avata.png')}
        />
        <View>
          <Text style={myStyles.txtName}>Trần Hiếu Trọng</Text>
          <Text style={myStyles.txtGmail}>tranhieutrong@gmail.com</Text>
        </View>
      </View>
      <Text style={myStyles.txtMain}>Chung</Text>
      <View style={myStyles.line} />
      <View>
        <TouchableOpacity
          onPress={btnEditinfo}
          style={myStyles.buttonInformation}>
          <Text style={myStyles.txtButtonInfo}>Chỉnh sửa thông tin</Text>
        </TouchableOpacity>
        <TouchableOpacity style={myStyles.buttonInformation}>
          <Text style={myStyles.txtButtonInfo}>Cẩm nang trồng cây</Text>
        </TouchableOpacity>
        <TouchableOpacity style={myStyles.buttonInformation}>
          <Text style={myStyles.txtButtonInfo}>Lịch sử giao dịch</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={btnQA} style={myStyles.buttonInformation}>
          <Text style={myStyles.txtButtonInfo}>Q & A</Text>
        </TouchableOpacity>
      </View>
      <Text style={myStyles.txtMain}>Bảo mật và Điều khoản</Text>
      <View style={myStyles.line} />
      <View>
        <TouchableOpacity style={myStyles.buttonInformation}>
          <Text style={myStyles.txtButtonInfo}>Điều khoản và Điều kiện</Text>
        </TouchableOpacity>
        <TouchableOpacity style={myStyles.buttonInformation}>
          <Text style={myStyles.txtButtonInfo}>Chính sách quyền riêng tư</Text>
        </TouchableOpacity>
        <TouchableOpacity style={myStyles.buttonInformation}>
          <Text style={myStyles.txtLogout}>Đăng xuất</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UserScreen;

const myStyles = StyleSheet.create({
  txtLogout: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '500',
    color: 'red',
  },
  txtButtonInfo: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '500',
    color: '#000000',
  },
  buttonInformation: {
    marginTop: 15,
  },
  txtMain: {
    marginTop: 30,
    fontSize: 16,
    lineHeight: 20,
    fontWeight: 'normal',
    color: '#7f7f7f',
  },
  txtGmail: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: 'normal',
    color: '#7f7f7f',
  },
  txtName: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '500',
    color: '#000000',
  },
  line: {
    height: 1,
    backgroundColor: '#221f1f',
    width: '100%',
  },
  viewIconProfile: {
    marginTop: 20,
    flexDirection: 'row',
    // justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  iconAvata: {
    marginRight: 26,
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#000000',
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
