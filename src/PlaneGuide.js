import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const PlaneGuide = () => {
  const navigation = useNavigation();

  const btnEditinfo = () => {
    navigation.goBack();
  };
  const btnPlantGuide = () => {
    navigation.navigate('DetailsPlantGuide');
  };
  return (
    <View style={myStyles.container}>
      <View style={myStyles.containerHeader}>
        <TouchableOpacity onPress={btnEditinfo} style={myStyles.iconContainer}>
          <Image
            style={myStyles.icon}
            source={require('../images/ic_back.png')}
          />
        </TouchableOpacity>
        <View style={myStyles.titleCenter}>
          <Text style={myStyles.title}>CẨM NANG TRỒNG CÂY</Text>
        </View>
      </View>

      <TouchableOpacity onPress={btnPlantGuide} style={myStyles.viewPlant}>
        <Image
          style={myStyles.imgPlant}
          source={require('../images/panseden.png')}
        />
        <View>
          <Text style={myStyles.txtPlant}>Panse Đen | Hybrid</Text>
          <Text style={myStyles.txtHardMode}>Độ khó 3/5</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default PlaneGuide;

const myStyles = StyleSheet.create({
  txtHardMode: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: 'normal',
    color: '#7d7b7b ',
  },
  txtPlant: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '500',
    color: '#000000',
  },
  imgPlant: {
    marginLeft: 20,
    marginRight: 15,
  },
  viewPlant: {
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
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
