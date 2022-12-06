import React, {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {COLOR} from './../../styles/colors';

const SplashScreen = () => {
  return (
    <View style={styles.imgWrapper}>
      <Image source={require('../../assets/facebook.png')} style={styles.img} />
      <ActivityIndicator color={COLOR.inactive} />
      <View style={styles.desWrapper}>
        <Text style={styles.text}>from</Text>
        <Image
          source={require('../../assets/meta.png')}
          style={styles.imgMeta}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imgWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 60,
    height: 60,
    marginBottom: 20,
  },
  text: {
    color: COLOR.white2,
    fontSize: 18,
  },
  desWrapper: {
    position: 'absolute',
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgMeta: {
    width: 90,
    height: 50,
  },
});

export default SplashScreen;
