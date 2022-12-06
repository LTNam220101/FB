import React, {Image, StyleSheet, View} from 'react-native';

const Avatar = ({source}) => {
  return (
    <View style={styles.view}>
      <Image style={styles.img} source={source} />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    width: 40,
    height: 40,
    position: 'relative',
  },
  img: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});

export default Avatar;
