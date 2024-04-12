import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  PressableOpacity,
  ToastAndroid,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {LoginAccount} from './reducers/LoginSlice';

const Login = props => {
  const {navigation} = props;
  const dispatch = useDispatch();
  const {loginData, loginStatus} = useSelector(state => state.login);
  useEffect(() => {
    console.log(loginStatus, loginData);
    if (loginStatus == 'succeeded') {
      if (loginData.code == 1) {
        navigation.goBack();
      }
    }
  }, [loginStatus]);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberAccount, setRememberAccount] = useState(false);
  //normal
  const [usernameNormal, setusernameNormal] = useState('h@gmail.com');
  const [passwordNormal, setpasswordNormal] = useState('123123');
  //error
  const [usernameError, setusernameError] = useState('');
  const [passwordError, setpasswordError] = useState('');

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const toggleRememberAccount = () => {
    setRememberAccount(!rememberAccount);
  };
  const changeTextUsername = data => {
    setusernameNormal(data);
    setusernameError('');
  };
  const changeTextPassword = data => {
    setpasswordNormal(data);
    setpasswordError('');
  };
  // const ButtonLogin = () => {
  //     let hasError = false;

  //     if (usernameNormal === "") {
  //         setusernameError("Nhập email hoặc số điện thoại");
  //         hasError = true;
  //     } else {
  //         setusernameError(""); // Xóa thông báo lỗi nếu đã nhập dữ liệu
  //     }

  //     if (passwordNormal === "") {
  //         setpasswordError("Nhập mật khẩu");
  //         hasError = true;
  //     } else {
  //         setpasswordError(""); // Xóa thông báo lỗi nếu đã nhập dữ liệu
  //     }

  //     // Kiểm tra nếu không có lỗi mới thực hiện đăng nhập
  //     if (!hasError) {
  //         navigation.navigate('HomeScreen');
  //     }
  // }

  const ButtonLogin = async () => {
    if (usernameNormal === '') {
      setusernameError('Nhập email hoặc số điện thoại');
    } else {
      setusernameError('');
    }

    if (passwordNormal === '') {
      setpasswordError('Nhập mật khẩu');
    } else {
      setpasswordError('');
    }
    dispatch(
      LoginAccount({
        email: usernameNormal,
        password: passwordNormal,
      }),
      navigation.navigate('HomeScreen'),
    );
  };

  const handleRegisterPress = () => {
    navigation.navigate('Register');
  };
  return (
    <View>
      <View>
        <Image
          style={myStyles.img}
          source={require('../images/ellipselogin.png')}
        />
        <Text style={myStyles.txtWelcome}>Chào mừng bạn</Text>
        <Text style={myStyles.txtHello}>Đăng nhập tài khoản</Text>
      </View>
      <View style={myStyles.inputView}>
        <TextInput
          style={!!usernameError ? myStyles.input_error : myStyles.input}
          placeholder="Nhập email hoặc số điện thoại"
          placeholderTextColor={'#8b8b8b'}
          value={usernameNormal}
          onChangeText={data => changeTextUsername(data)}
        />
        {!!usernameError && (
          <Text style={myStyles.title_error}>{usernameError}</Text>
        )}
        <View></View>
        <TextInput
          style={!!passwordError ? myStyles.input_error : myStyles.input}
          placeholder="Mật Khẩu"
          placeholderTextColor={'#8b8b8b'}
          secureTextEntry={!showPassword}
          value={passwordNormal}
          onChangeText={data => changeTextPassword(data)}
        />
        {!!passwordError && (
          <Text style={myStyles.title_error}>{passwordError}</Text>
        )}
      </View>
      <View style={myStyles.viewRememberForgot}>
        <TouchableOpacity
          style={myStyles.checkRemember}
          onPress={toggleRememberAccount}>
          <Image
            style={myStyles.iconCheckbox1}
            source={
              rememberAccount
                ? require('../images/checkbox2.png')
                : require('../images/checkbox1.png')
            }
          />
          <Text style={myStyles.txtRemember}>Nhớ tài khoản</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={myStyles.txtForget}>Quên mật khẩu?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={myStyles.btnLogin} onPress={ButtonLogin}>
        <LinearGradient
          colors={['#007537', '#4caf50']}
          style={myStyles.linearGradient}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 0}}>
          <Text style={myStyles.txtLogin}>Đăng Nhập</Text>
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
      <View style={myStyles.viewRegister}>
        <Text style={myStyles.txtNoAccount}>Bạn không có tài khoản</Text>
        <TouchableOpacity
          style={myStyles.btnRegister}
          onPress={handleRegisterPress}>
          <Text style={myStyles.txtRegister}>Tạo tài khoán</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
const myStyles = StyleSheet.create({
  title_error: {
    color: 'red',
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
  viewRegister: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: '100%',
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
  iconCheckbox1: {
    marginRight: 6,
  },
  checkRemember: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewRememberForgot: {
    paddingLeft: 30,
    paddingRight: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 13,
  },
  eyeIcon: {
    // position: 'absolute',
    right: 45,
    // top: 96,
    marginLeft: 350,
    marginTop: -55,
    marginBottom: 15,
  },
  inputView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    position: 'relative',
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
  },
  img: {
    marginTop: -100,
    width: 450,
    height: 400,
  },
});
