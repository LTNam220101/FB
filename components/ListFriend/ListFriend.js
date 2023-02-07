import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import IconMat from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLOR} from '../../styles/colors';
import {useSelector} from 'react-redux';

const ListFriend = ({edit, setEdit}) => {
  const getListFriendsResult = useSelector(state => state.getListFriendsResult);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={edit}
      onRequestClose={() => {
        setEdit(!edit);
      }}>
      <View style={styles.modalView}>
        <View style={styles.top}>
          <TouchableOpacity
            style={styles.return}
            onPress={() => {
              setEdit(!edit);
            }}>
            <Icon name={'arrow-back-outline'} size={30} color={COLOR.black} />
          </TouchableOpacity>
          <Text style={styles.text}>Bạn bè</Text>
        </View>
        {getListFriendsResult &&
          getListFriendsResult.response.data.map(friend => (
            <View key={friend.id} style={styles.friend}>
              <Image source={{uri: friend.avatar}} style={styles.friendImg} />
              <Text style={styles.friendText}>{friend.name}</Text>
              <TouchableOpacity
                style={styles.dots}
                // ref={refView}
                // onPress={showPopover}
              >
                <IconMat
                  name="dots-horizontal"
                  size={25}
                  color={COLOR.grayTime}
                />
              </TouchableOpacity>
            </View>
          ))}
      </View>
    </Modal>
  );
};

export default ListFriend;

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
  friend: {
    marginTop: 10,
    marginLeft: 12,
    marginRight: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  friendImg: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  friendText: {
    flex: 1,
    marginLeft: 18,
    color: COLOR.black,
    fontWeight: 'bold',
  },
});
