import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {COLOR} from '../../styles/colors';

const MessengerItem = ({item, navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Chat', {name: 'Jane'})}>
      <View style={styles.container}>
        <View style={styles.bgAvatar}>
          <Image source={{uri: item.avatar}} style={styles.avatar} />
        </View>
        <View style={styles.info}>
          <Text style={styles.name}>{item.name}</Text>
          <Text numberOfLines={1}>{item.description}</Text>
        </View>
        <View style={styles.bgSeen}>
          <Image source={{uri: item.avatar}} style={styles.avatarSeen} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MessengerItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.white,
    marginRight: 10,
    marginLeft: 10,
    marginTop: 5,
    marginBottom: 5,
    flexDirection: 'row',
  },
  bgAvatar: {},
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  info: {
    flex: 1,
    flexDirection: 'column',
    paddingLeft: 10,
    justifyContent: 'center',
  },
  name: {
    fontWeight: 'bold',
    color: COLOR.black,
    fontSize: 16,
  },
  bgSeen: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarSeen: {
    width: 10,
    height: 10,
    borderRadius: 5,
    justifyContent: 'flex-end',
  },
});
