import React from 'react';
import {
  TouchableOpacity,
  ScrollView,
  Text,
  View,
  Image,
  StyleSheet,
} from 'react-native';
import {COLOR} from '../../styles/colors';
import CoverPhoto from '../../assets/cover.jpg';
import Avatar from '../../assets/avatar.jpg';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconM from 'react-native-vector-icons/FontAwesome5';
import Camera from 'react-native-vector-icons/Entypo';

const ProfilePage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topHeader}>
        <Text style={styles.name}>Nam Lương</Text>
        <TouchableOpacity>
          <Icon name="sort-down" size={29} color={COLOR.black} />
        </TouchableOpacity>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.button}>
            <IconM name="user-edit" size={29} color={COLOR.black} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.coverContainer}>
        <Image source={CoverPhoto} style={styles.coverPhoto} />
        <View
          style={styles.buttons}
          style={{position: 'absolute', alignSelf: 'flex-end', marginTop: 155}}>
          <TouchableOpacity style={styles.button}>
            <Camera name="camera" size={29} color={COLOR.black} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.avatarContainer}>
        <Image style={styles.avatar} source={Avatar} />
        <View
          style={styles.buttons}
          style={{position: 'absolute', alignSelf: 'flex-end', bottom: 5}}>
          <TouchableOpacity style={styles.button}>
            <Camera name="camera" size={29} color={COLOR.black} />
          </TouchableOpacity>
        </View>
      </View>
      <Text
        style={{
          color: COLOR.black,
          marginTop: 50,
          marginRight: 150,
          alignSelf: 'center',
          fontWeight: 'bold',
          fontSize: 30,
        }}>
        Nam Lương
      </Text>
      <View
        style={{
          backgroundColor: COLOR.blue,
          width: '90%',
          height: 50,
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 10,
        }}>
        <Text style={{color: COLOR.white, fontSize: 18, fontWeight: 'bold'}}>
          Đặt trạng thái
        </Text>
      </View>
      <View style={{color: COLOR.white, height: 5}}></View>
      <View
        style={{
          backgroundColor: COLOR.gray,
          width: '90%',
          height: 50,
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 10,
        }}>
        <Text style={{color: COLOR.black, fontSize: 18, fontWeight: 'bold'}}>
          Chỉnh sửa trang cá nhân
        </Text>
      </View>
      <View style={{color: COLOR.gray, height: 10}}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.white,
  },
  topHeader: {
    height: 70,
    backgroundColor: COLOR.white,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  name: {
    fontSize: 25,
    fontWeight: 'bold',
    color: COLOR.black,
    padding: 10,
  },
  buttons: {
    flexDirection: 'row',
    layoutDirection: 'rtl',
  },
  button: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#eeeeee',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 16,
  },
  coverPhoto: {
    width: '100%',
    height: 200,
  },
  avatarContainer: {
    height: 150,
    width: 150,
    borderRadius: 200,
    backgroundColor: COLOR.white,
    position: 'absolute',
    alignSelf: 'flex-start',
    marginTop: 170,
    marginLeft: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    height: 150,
    width: 150,
    borderRadius: 200,
  },
  //    changeStatus: {
  //        width: 100,
  //        height: 200,
  //        alignSelf: 'center',
  //        fontSize: 30,
  //        borderRadius: 10,
  //    },
});

export default ProfilePage;
