import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Pressable,
  ToastAndroid,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {DangKyTaiKhoan} from './reducers/RegisterSlice';

const Register = props => {
  const {navigation} = props;

  const dispatch = useDispatch();
  const {registerData, registerStatus} = useSelector(state => state.register);
  useEffect(() => {
    console.log(registerStatus, registerData);
    if (registerStatus == 'succeeded') {
      if (registerData.code == 1) {
        navigation.goBack();
      }
      ToastAndroid.show(registerData.message, ToastAndroid.SHORT);
    }
  }, [registerStatus]);
  //normal
  const [nameNormal, setnameNormal] = useState('');
  const [emailNormal, setemailNormal] = useState('');
  const [phoneNormal, setphoneNormal] = useState('');
  const [passwordNormal, setpasswordNormal] = useState('');
  //error
  const [nameError, setnameError] = useState('');
  const [emailError, setemailError] = useState('');
  const [phoneError, setphoneError] = useState('');
  const [passwordError, setpasswordError] = useState('');

  const changeTextName = data => {
    setnameNormal(data);
    setnameError('');
  };
  const changeTextEmail = data => {
    setemailNormal(data);
    setemailError('');
  };
  const changeTextPhone = data => {
    setphoneNormal(data);
    setphoneError('');
  };
  const changeTextPass = data => {
    setpasswordNormal(data);
    setpasswordError('');
  };
  //   const ButtonRegister = async () => {
  //     if (nameNormal === '') {
  //       setnameError('Nhập họ tên');
  //     } else {
  //       setnameError(''); // Xóa thông báo lỗi nếu đã nhập dữ liệu
  //     }

  //     if (emailNormal === '') {
  //       setemailError('Nhập E-mail');
  //     } else {
  //       setemailError(''); // Xóa thông báo lỗi nếu đã nhập dữ liệu
  //     }

  //     if (phoneNormal === '') {
  //       setphoneError('Nhập số điện thoại');
  //     } else {
  //       setphoneError(''); // Xóa thông báo lỗi nếu đã nhập dữ liệu
  //     }

  //     if (passwordNormal === '') {
  //       setpasswordError('Nhập mật khẩu');
  //     } else {
  //       setpasswordError(''); // Xóa thông báo lỗi nếu đã nhập dữ liệu
  //     }
  //     // Kiểm tra xem có lỗi không
  //     if (
  //       nameNormal !== '' &&
  //       emailNormal !== '' &&
  //       phoneNormal !== '' &&
  //       passwordNormal !== ''
  //     ) {
  //       // Thực hiện đăng ký tài khoản ở đây

  //       try {
  //         // Gọi API hoặc các hàm xử lý đăng ký tài khoản ở đây

  //         // Đăng ký thành công
  //         console.log('Đăng ký thành công!');

  //         // Chuyển trang đến màn hình đăng nhập
  //         navigation.navigate('Login'); // Thay 'Login' bằng tên màn hình đăng nhập thực sự trong ứng dụng của bạn
  //       } catch (error) {
  //         // Xử lý lỗi nếu có
  //         // console.error("Đăng ký không thành công:", error);
  //       }
  //     }
  //     // // Kiểm tra xem có thông báo lỗi nào xuất hiện không
  //     // if (nameNormal !== "" && emailNormal !== "" && phoneNormal !== "" && passwordNormal !== "") {
  //     //     // Thực hiện các thao tác đăng ký tài khoản ở đây
  //     //     try {
  //     //         // Gọi API hoặc các hàm xử lý đăng ký tài khoản ở đây
  //     //         // Ví dụ:
  //     //         await AxiosInstance.post('/register', {
  //     //             name: nameNormal,
  //     //             email: emailNormal,
  //     //             phone: phoneNormal,
  //     //             password: passwordNormal
  //     //         });
  //     //         // Đăng ký thành công, có thể thực hiện chuyển hướng hoặc các thao tác khác ở đây
  //     //         console.log("Đăng ký thành công!");
  //     //     } catch (error) {
  //     //         // Xử lý lỗi nếu có
  //     //         console.error("Đăng ký không thành công:", error);
  //     //     }
  //     // }
  //   };
  const ButtonRegister = async () => {
    // Xóa các thông báo lỗi trước khi thực hiện kiểm tra lại
    setnameError('');
    setemailError('');
    setphoneError('');
    setpasswordError('');

    if (!nameNormal) {
      setnameError('Nhập họ tên');
      return;
    }

    if (!emailNormal) {
      setemailError('Nhập E-mail');
      return;
    }

    if (!phoneNormal) {
      setphoneError('Nhập số điện thoại');
      return;
    }

    if (!passwordNormal) {
      setpasswordError('Nhập mật khẩu');
      return;
    }
    dispatch(
      DangKyTaiKhoan({
        name: nameNormal,
        email: emailNormal,
        phone: phoneNormal,
        password: passwordNormal,
      }),
    );
    // try {
    //   await AxiosInstance().post('/users/register', {
    //     name: nameNormal,
    //     email: emailNormal,
    //     phone: phoneNormal,
    //     password: passwordNormal,
    //   });

    //   console.log('Đăng ký thành công!');

    //   navigation.navigate('HomeScreen');
    // } catch (error) {
    //   console.error('Đăng ký không thành công:', error);
    // }
  };

  const handleLoginPress = () => {
    navigation.navigate('Login');
  };
  return (
    <View>
      <View>
        <Image
          style={myStyles.img}
          source={require('../images/ellipselogin.png')}
        />
        <Text style={myStyles.txtWelcome}>Đăng kí</Text>
        <Text style={myStyles.txtHello}>Tạo tài khoản</Text>
      </View>
      <View style={myStyles.inputView}>
        <TextInput
          style={!!nameError ? myStyles.input_error : myStyles.input}
          placeholder="Họ tên"
          placeholderTextColor={'#8b8b8b'}
          onChangeText={data => changeTextName(data)}
        />
        {!!nameError && <Text style={myStyles.title_error}>{nameError}</Text>}
        <TextInput
          style={!!emailError ? myStyles.input_error : myStyles.input}
          placeholder="E-mail"
          placeholderTextColor={'#8b8b8b'}
          onChangeText={data => changeTextEmail(data)}
        />
        {!!emailError && <Text style={myStyles.title_error}>{emailError}</Text>}
        <TextInput
          style={!!phoneError ? myStyles.input_error : myStyles.input}
          placeholder="Số điện thoại"
          placeholderTextColor={'#8b8b8b'}
          onChangeText={data => changeTextPhone(data)}
        />
        {!!phoneError && <Text style={myStyles.title_error}>{phoneError}</Text>}
        <TextInput
          style={!!passwordError ? myStyles.input_error : myStyles.input}
          placeholder="Mật khẩu"
          placeholderTextColor={'#8b8b8b'}
          onChangeText={data => changeTextPass(data)}
        />
        {!!passwordError && (
          <Text style={myStyles.title_error}>{passwordError}</Text>
        )}
      </View>
      <View style={myStyles.viewRegis}>
        <Text>
          Để đăng ký tài khoản, bạn đồng ý Terms & Conditions and Privacy Policy
        </Text>
      </View>
      <TouchableOpacity style={myStyles.btnLogin} onPress={ButtonRegister}>
        <LinearGradient
          colors={['#007537', '#4caf50']}
          style={myStyles.linearGradient}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 0}}>
          <Text style={myStyles.txtLogin}>Đăng Kí</Text>
        </LinearGradient>
      </TouchableOpacity>
      <View style={myStyles.viewLine}>
        <View style={myStyles.line} />
        <Text style={myStyles.txtOr}>Hoặc</Text>
        <View style={myStyles.line} />
      </View>
      <View style={myStyles.iconGGFB}>
        <TouchableOpacity>
          <Image style={myStyles.iconGG} source={require('../images/gg.png')} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={myStyles.iconFB} source={require('../images/fb.png')} />
        </TouchableOpacity>
      </View>
      <View style={myStyles.viewRegister1}>
        <Text style={myStyles.txtNoAccount}>Bạn có tài khoản</Text>
        <TouchableOpacity
          onPress={handleLoginPress}
          style={myStyles.btnRegister}>
          <Text style={myStyles.txtRegister}>Đăng nhập</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;

const myStyles = StyleSheet.create({
  title_error: {
    color: 'red',
  },
  viewRegister1: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 50,
  },
  txtRemember: {
    color: '#949090',
  },
  txtForget: {
    color: '#007537',
  },
  btnRegister: {
    marginLeft: 7,
  },
  txtRegister: {
    fontSize: 15,
    fontWeight: 'normal',
    color: '#009245',
  },
  txtNoAccount: {
    fontSize: 15,
    fontWeight: 'normal',
    color: '#000',
  },
  iconF: {
    width: 32,
    height: 32,
    marginLeft: 16,
  },
  iconGG: {
    width: 32,
    height: 32,
    marginRight: 16,
  },
  iconGGFB: {
    marginTop: 35,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtOr: {
    fontSize: 15,
    fontWeight: '500',
    color: '#000',
  },
  viewLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  line: {
    height: 1,
    backgroundColor: '#4caf50', // Màu của đường line
    width: '40%', // Chiều rộng của đường line
  },
  txtLogin: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  linearGradient: {
    flex: 1,
    borderRadius: 20,
    width: 330,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnLogin: {
    width: 330,
    height: 46,
    backgroundColor: '#4caf50',
    marginTop: 25,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    overflow: 'hidden',
  },
  viewRegis: {
    justifyContent: 'center',
    alignItems: 'center',
    // textAlign: 'center',
  },
  inputView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 330,
    height: 46,
    marginTop: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#8b8b8b',
    paddingLeft: 14,
  },
  input_error: {
    width: 330,
    height: 46,
    marginTop: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'red',
    paddingLeft: 14,
  },
  txtHello: {
    marginTop: 13,
    fontSize: 18,
    textAlign: 'center',
    color: '#000000',
    fontWeight: 'normal',
  },
  txtWelcome: {
    fontSize: 30,
    textAlign: 'center',
    color: '#000000',
    fontWeight: 'bold',
    marginTop: -20,
  },
  img: {
    marginTop: -220,
    width: 450,
    height: 400,
  },
});
