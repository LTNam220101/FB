import React, {
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {COLOR} from '../../styles/colors';
import {requestCameraPermission} from '../../utils/requestPermisssion/requestCameraPermission';
import EditProfilePage from '../EditProfilePage/EditProfilePage';
import ToolBar from '../HomePage/ToolBar';
import ImagePicker from 'react-native-image-crop-picker';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect, useState} from 'react';
import {getObject, setObject} from '../../utils/storage';
import {checkUser, getListFriends, updateAvatar} from '../ProfilePage/actions';
import {updateCover} from './../ProfilePage/actions';
import Camera from 'react-native-vector-icons/Entypo';
import ListFriend from './../ListFriend/ListFriend';

const width = (Dimensions.get('window').width - 34) / 3;

const Friend = ({avatar, name, id}) => {
  return (
    <TouchableOpacity style={styles.friend}>
      <Image source={avatar} style={styles.avatar} />
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
};

const Friends = () => {
  const dispatch = useDispatch();
  const getListFriendsResult = useSelector(state => state.getListFriendsResult);
  const [openListFriend, setOpenListFriend] = useState(false);

  useEffect(() => {
    dispatch(getListFriends());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.friends}>
      <ListFriend setEdit={setOpenListFriend} edit={openListFriend} />
      <Text style={styles.text}>Bạn bè</Text>
      {getListFriendsResult && (
        <Text style={styles.number}>
          {getListFriendsResult.response.data.length
            ? getListFriendsResult.response.data.length
            : 'Chưa có'}{' '}
          bạn
        </Text>
      )}
      <View style={styles.grid}>
        {getListFriendsResult &&
          getListFriendsResult.response.data.slice(0, 6).map(friend => {
            return (
              <Friend
                key={friend.id}
                avatar={{uri: friend.avatar}}
                name={friend.name}
                id={friend.id}
              />
            );
          })}
      </View>
      {getListFriendsResult && getListFriendsResult.response.data.length ? (
        <Button
          onPress={() => setOpenListFriend(true)}
          color={COLOR.gray}
          title="Xem tất cả bạn bè"
        />
      ) : null}
    </View>
  );
};

const ProfileHeader = () => {
  const dispatch = useDispatch();
  const updateAvatarResult = useSelector(state => state.updateAvatarResult);
  const updateCoverResult = useSelector(state => state.updateCoverResult);
  const checkUserResult = useSelector(state => state.checkUserResult);

  const [user, setUser] = useState();
  const [avatar, setAvatar] = useState();
  const [cover, setCover] = useState();
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    getObject('user').then(user => {
      setUser(user);
    });
  }, []);

  useEffect(() => {
    if (checkUserResult) {
      setObject('user', checkUserResult.response.data);
      setUser(checkUserResult.response.data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkUserResult]);

  useEffect(() => {
    if (avatar) {
      const payload = {avatar: avatar};
      dispatch(updateAvatar(payload));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [avatar]);

  useEffect(() => {
    if (cover) {
      const payload = {cover: cover};
      dispatch(updateCover(payload));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cover]);

  useEffect(() => {
    if (
      (updateAvatarResult && updateAvatarResult.success === true) ||
      (updateCoverResult && updateCoverResult.success === true)
    ) {
      dispatch(checkUser());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updateAvatarResult, updateCoverResult]);

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
  return (
    <View style={styles.header}>
      <EditProfilePage setEdit={setEdit} edit={edit} />
      <View style={{backgroundColor: COLOR.white, marginBottom: 10}}>
        <View style={styles.coverContainer}>
          {user && (
            <Image source={{uri: user.cover}} style={styles.coverPhoto} />
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
          {user && (
            <Image
              style={styles.avatarTop}
              source={{
                uri: user.avatar,
              }}
            />
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
          <Text
            style={{
              color: COLOR.black,
              marginTop: 40,
              marginLeft: 20,
              marginBottom: 20,
              fontWeight: 'bold',
              fontSize: 24,
            }}>
            {user.name}
          </Text>
        )}
        <View>
          <View
            style={{
              backgroundColor: COLOR.backgroundColor,
              paddingLeft: 11,
              marginBottom: 20,
              paddingRight: 11,
            }}>
            <Button
              onPress={() => setEdit(true)}
              color={COLOR.gray}
              title="Chỉnh sửa trang cá nhân"
            />
          </View>
        </View>
      </View>
      <Friends />
      <ToolBar inProfile />
    </View>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  topHeader: {
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  nameTop: {
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
  avatarTop: {
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
  header: {
    marginBottom: 10,
  },
  friends: {
    backgroundColor: COLOR.white,
    paddingBottom: 10,
    paddingLeft: 11,
    paddingRight: 11,
    marginBottom: 10,
  },
  text: {
    marginTop: 4,
    fontSize: 18,
    color: COLOR.black,
    fontWeight: 'bold',
  },
  number: {
    marginBottom: 4,
  },
  grid: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  friend: {
    marginTop: 4,
    marginBottom: 8,
    marginLeft: 2,
    marginRight: 2,
    width: width,
    height: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: width - 10,
    height: width - 10,
    borderRadius: 10,
  },
  name: {
    color: COLOR.black,
  },
});
