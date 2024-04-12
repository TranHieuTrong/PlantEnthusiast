import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const EditInfomation = () => {
  const navigation = useNavigation();

  const btnGoback = () => {
    navigation.goBack();
  };
  return (
    <View style={myStyles.container}>
      <View style={myStyles.containerHeader}>
        <TouchableOpacity onPress={btnGoback} style={myStyles.iconContainer}>
          <Image
            style={myStyles.icon}
            source={require('../images/ic_back.png')}
          />
        </TouchableOpacity>
        <View style={myStyles.titleCenter}>
          <Text style={myStyles.title}>CHỈNH SỬA THÔNG TIN</Text>
        </View>
      </View>
      <View style={myStyles.viewIconAvata}>
        <Image
          style={myStyles.iconAvata}
          source={require('../images/avata.png')}
        />
      </View>
      <View>
        <Text style={myStyles.txtTitle}>
          Thông tin sẽ được lưu cho lần mua kế tiếp. Bấm vào thông tin chi tiết
          để chỉnh sửa.
        </Text>
        <TextInput
          style={myStyles.input}
          placeholder="Trần Hiếu Trọng"
          placeholderTextColor={'#7d7b7b'}
        />
        <View style={myStyles.line}></View>
        <TextInput
          style={myStyles.input}
          placeholder="tranhieutrong@gmail.com"
          placeholderTextColor={'#7d7b7b'}
        />
        <View style={myStyles.line}></View>
        <TextInput
          style={myStyles.input}
          placeholder="Hồ Chí Minh"
          placeholderTextColor={'#7d7b7b'}
        />
        <View style={myStyles.line}></View>
        <TextInput
          style={myStyles.input}
          placeholder="02423423434"
          placeholderTextColor={'#7d7b7b'}
        />
        <View style={myStyles.line}></View>
      </View>
    </View>
  );
};

export default EditInfomation;

const myStyles = StyleSheet.create({
  input: {
    marginTop: 10,
  },
  txtTitle: {
    marginTop: 40,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: 'normal',
    color: '#221f1f',
  },
  line: {
    height: 1,
    width: '100%',
    backgroundColor: '#ababab',
  },
  viewIconAvata: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
  iconAvata: {
    width: 90,
    // marginTop: 10,
    height: 90,
    borderRadius: 50,
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
