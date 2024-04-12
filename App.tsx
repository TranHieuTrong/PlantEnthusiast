/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Login from './src/Login';
import Register from './src/Register';
import HomeScreen from './src/HomeScreen';
import SearchScreen from './src/SearchScreen';
import NotificationsScreen from './src/NotificationsScreen';
import UserScreen from './src/UserScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import DetailScreen from './src/DetailScreen';
import CartScreen from './src/CartScreen';
import ListPlantProduct from './src/ListPlantProduct';
import ListProduct from './src/ListProduct';
import Payment from './src/Payment';
import Card from './src/Card';
import EditInfomation from './src/EditInfomation';
import PlaneGuide from './src/PlaneGuide';
import QA from './src/QA';
import {store} from './src/store/store';
import {Provider} from 'react-redux';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabBottom = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? require('./images/home.png')
              : require('./images/home.png');
          } else if (route.name === 'Find') {
            iconName = focused
              ? require('./images/search.png')
              : require('./images/search.png');
          } else if (route.name === 'Notification') {
            iconName = focused
              ? require('./images/noti.png')
              : require('./images/noti.png');
          } else if (route.name === 'Profile') {
            iconName = focused
              ? require('./images/user.png')
              : require('./images/user.png');
          }

          return <Image source={iconName} style={{width: 24, height: 24}} />;
        },
        tabBarShowLabel: false,
        tabBarStyle: [{display: 'flex'}, null],
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Find"
        component={SearchScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationsScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Profile"
        component={UserScreen}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          {/* <Stack.Screen name="QA" component={QA} options={{headerShown: false}} /> */}
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="HomeScreen"
            component={TabBottom}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="DetailScreen"
            component={DetailScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="CartScreen"
            component={CartScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ListPlantProduct"
            component={ListPlantProduct}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ListProduct"
            component={ListProduct}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="EditInfomation"
            component={EditInfomation}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Payment"
            component={Payment}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Card"
            component={Card}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="UserScreen"
            component={UserScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="QA"
            component={QA}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>

    // <View>
    //   <DetailScreen />
    // </View>
  );
}

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
