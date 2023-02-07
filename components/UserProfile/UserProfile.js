import {StyleSheet, View, Modal, TouchableOpacity, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {COLOR} from './../../styles/colors';
import ProfilePage from './../ProfilePage/ProfilePage';

const UserProfile = ({modalVisible, setModalVisible, user}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.modalView}>
        <View style={styles.top}>
          <TouchableOpacity
            style={styles.return}
            onPress={() => setModalVisible(false)}>
            <Icon name={'arrow-back-outline'} size={30} color={COLOR.black} />
          </TouchableOpacity>
          {/* <Text style={styles.text}>Tạo bài viết</Text> */}
        </View>
        <ProfilePage user={user.id} />
      </View>
    </Modal>
  );
};

export default UserProfile;

const styles = StyleSheet.create({});
