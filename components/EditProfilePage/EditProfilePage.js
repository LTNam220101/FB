import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  Button,
  Image,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Camera from 'react-native-vector-icons/Entypo';
import {COLOR} from '../../styles/colors';
import {requestCameraPermission} from '../../utils/requestPermisssion/requestCameraPermission';
import ImagePicker from 'react-native-image-crop-picker';
import {getObject, setObject} from '../../utils/storage';
import {useDispatch, useSelector} from 'react-redux';
import {checkUser, updateAvatar, updateProfile} from '../ProfilePage/actions';
import {updateCover} from './../ProfilePage/actions';

const EditProfilePage = ({edit, setEdit}) => {
  const dispatch = useDispatch();
  const updateAvatarResult = useSelector(state => state.updateAvatarResult);
  const updateCoverResult = useSelector(state => state.updateCoverResult);
  const updateProfileResult = useSelector(state => state.updateProfileResult);
  const checkUserResult = useSelector(state => state.checkUserResult);

  const [user, setUser] = useState();
  const [avatar, setAvatar] = useState();
  const [cover, setCover] = useState();
  const [name, setName] = useState();

  useEffect(() => {
    getObject('user').then(user => {
      setUser(user);
    });
  }, []);

  useEffect(() => {
    if (
      (updateAvatarResult && updateAvatarResult.success === true) ||
      (updateProfileResult && updateProfileResult.success === true) ||
      (updateCoverResult && updateCoverResult.success === true)
    ) {
      dispatch(checkUser());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updateAvatarResult, updateCoverResult, updateProfileResult]);

  useEffect(() => {
    if (checkUserResult) {
      setObject('user', checkUserResult.response.data).then(user => {
        setEdit(false);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkUserResult]);

  const openImagePicker = type => {
    requestCameraPermission().then(data => {
      ImagePicker.openPicker({
        width: 300,
        height: 400,
        mediaType: 'photo',
      })
        .then(image => {
          if (type === 'avatar') setAvatar(image);
          else setCover(image);
        })
        .catch(callBack => {
          // you forgot to add catch to this promise.
          console.log(callBack); // Please handle the callBack here.
        });
    });
  };

  const handlePress = () => {
    if (avatar) {
      const payload = {avatar: avatar};
      dispatch(updateAvatar(payload));
    }
    if (cover) {
      const payload = {cover: cover};
      dispatch(updateCover(payload));
    }
    if (name) {
      const payload = {name: name};
      dispatch(updateProfile(payload));
    }
    setAvatar(undefined);
    setCover(undefined);
    setName(undefined);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={edit}
      onRequestClose={() => {
        setAvatar(undefined);
        setCover(undefined);
        setName(undefined);
        setEdit(!edit);
      }}>
      <View style={styles.modalView}>
        <View style={styles.top}>
          <TouchableOpacity
            style={styles.return}
            onPress={() => {
              setAvatar(undefined);
              setCover(undefined);
              setName(undefined);
              setEdit(!edit);
            }}>
            <Icon name={'arrow-back-outline'} size={30} color={COLOR.black} />
          </TouchableOpacity>
          <Text style={styles.text}>Chỉnh sửa trang cá nhân</Text>
          <Button
            title="CẬP NHẬT"
            onPress={handlePress}
            disabled={!(avatar || cover || name)}
          />
        </View>
        <View style={{backgroundColor: COLOR.white, marginBottom: 10}}>
          <View style={styles.coverContainer}>
            {cover ? (
              <Image source={{uri: cover.path}} style={styles.coverPhoto} />
            ) : (
              user && (
                <Image source={{uri: user.cover}} style={styles.coverPhoto} />
              )
            )}
            <View style={styles.buttons1}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => openImagePicker('cover')}>
                <Camera name="camera" size={20} color={COLOR.black} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.avatarContainer}>
            {avatar ? (
              <Image source={{uri: avatar.path}} style={styles.avatar} />
            ) : (
              user && (
                <Image
                  style={styles.avatar}
                  source={{
                    uri: user.avatar,
                  }}
                />
              )
            )}
            <View style={styles.buttons2}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => openImagePicker('avatar')}>
                <Camera name="camera" size={20} color={COLOR.black} />
              </TouchableOpacity>
            </View>
          </View>
          {user && (
            <TextInput
              style={{
                color: COLOR.black,
                marginTop: 40,
                marginLeft: 20,
                marginBottom: 20,
                fontWeight: 'bold',
                fontSize: 24,
              }}
              placeholder={user.name}
              onChangeText={name => setName(name)}
              value={name}
            />
          )}
        </View>
      </View>
    </Modal>
  );
};

export default EditProfilePage;

const styles = StyleSheet.create({
  modalView: {
    width: '100%',
    height: '100%',
    backgroundColor: COLOR.white,
    shadowColor: COLOR.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 5,
  },
  top: {
    padding: 10,
    paddingBottom: 5,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: COLOR.gray,
  },
  return: {
    paddingRight: 5,
  },
  text: {
    marginBottom: 4,
    alignSelf: 'center',
    flex: 1,
    fontSize: 18,
    color: COLOR.black,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLOR.black,
    padding: 10,
  },
  buttons: {
    flexDirection: 'row',
    layoutDirection: 'rtl',
    position: 'absolute',
    alignSelf: 'flex-end',
    marginTop: 155,
  },
  buttons2: {
    flexDirection: 'row',
    layoutDirection: 'rtl',
    position: 'absolute',
    alignSelf: 'flex-end',
    bottom: 5,
  },
  buttons1: {
    flexDirection: 'row',
    layoutDirection: 'rtl',
    position: 'absolute',
    alignSelf: 'flex-end',
    marginTop: 155,
  },
  button: {
    width: 35,
    height: 35,
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
    top: 80,
    left: 12,
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
