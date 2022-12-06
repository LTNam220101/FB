import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React, {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLOR} from '../../styles/colors';

const NotiItem = ({avatar, name, read, time}) => {
  return (
    <TouchableHighlight>
      <View style={[styles.wrapper, read && styles.read]}>
        <Image source={avatar} style={styles.img} />
        <View style={styles.content}>
          <Text numberOfLines={3} style={styles.fullContent}>
            <Text style={styles.name}>{name} </Text>
            đã đăng một liên
            kếtasdasdjkahskjdahsdkjdahskjfahwsdrfikuewyrtefiugdjkvhbđã đăng một
            liên kếtasdasdjkahskjdahsdkjdahskjfahwsdrfikuewyrtefiugdjkvhb
          </Text>
          <Text style={styles.time}>{time}</Text>
        </View>
        <TouchableOpacity style={styles.dots}>
          <Icon name="dots-horizontal" size={25} color={COLOR.grayTime} />
        </TouchableOpacity>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    backgroundColor: COLOR.blueBackground,
    padding: 10,
  },
  read: {
    backgroundColor: COLOR.white,
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  content: {
    marginRight: 8,
    marginLeft: 8,
    flex: 1,
  },
  fullContent: {
    color: COLOR.grayTime,
  },
  name: {
    fontWeight: 'bold',
    color: COLOR.black,
  },
  time: {
    color: COLOR.grayTime,
  },
});

export default NotiItem;
