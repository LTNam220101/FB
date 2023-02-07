import React, {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLOR} from '../../styles/colors';
import {setAccept} from './../ProfilePage/actions';

const NotiItem = ({avatar, name, read, time, type, id}) => {
  const dispatch = useDispatch();

  const handleAccept = accept => {
    dispatch(setAccept({id: id, isAccept: accept ? true : false}));
  };

  return (
    <TouchableHighlight>
      <View style={[styles.wrapper, read && styles.read]}>
        <Image
          source={avatar}
          style={type ? styles.img : styles.imgNewFriend}
        />
        <View style={type ? styles.content : styles.contentNewFriend}>
          <Text numberOfLines={3} style={styles.fullContent}>
            <Text style={type ? styles.name : styles.nameNewFriend}>
              {name}{' '}
            </Text>
            {type
              ? `đã đăng một liênkếtasdasdjkahskjdahsdkjdahskjfahwsdrfikuewyrtefiugdjkvhbđã đăng mộtliên kếtasdasdjkahskjdahsdkjdahskjfahwsdrfikuewyrtefiugdjkvhb`
              : null}
          </Text>
          {type ? <Text style={styles.time}>{time}</Text> : null}
          {!type && (
            <View style={styles.fixToText}>
              <TouchableOpacity
                style={{
                  flex: 1,
                }}
                onPress={() => handleAccept(true)}>
                <View style={styles.button}>
                  <Text style={styles.buttonText}>Xác nhận</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={{flex: 1}}
                onPress={() => handleAccept(false)}>
                <View style={[styles.button, styles.deny]}>
                  <Text style={[styles.buttonText, styles.textDeny]}>
                    Từ chối
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
        </View>
        {/* <TouchableOpacity style={styles.dots}>
          <Icon name="dots-horizontal" size={25} color={COLOR.grayTime} />
        </TouchableOpacity> */}
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
  imgNewFriend: {
    width: 80,
    height: 80,
    borderRadius: 35,
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
  contentNewFriend: {
    marginRight: 8,
    marginLeft: 8,
    flex: 1,
    justifyContent: 'center',
  },
  fullContent: {
    color: COLOR.grayTime,
  },
  name: {
    fontWeight: 'bold',
    color: COLOR.black,
  },
  nameNewFriend: {
    // fontWeight: 'bold',
    color: COLOR.black,
    flex: 1,
    fontSize: 18,
  },
  time: {
    color: COLOR.grayTime,
  },
  fixToText: {
    width: '100%',
    flexDirection: 'row',
  },
  button: {
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 20,
    paddingRight: 20,
    marginRight: 10,
    marginTop: 5,
    borderRadius: 5,
    backgroundColor: COLOR.blue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deny: {
    backgroundColor: COLOR.grayBackground,
    buttonText: {
      color: COLOR.black,
    },
  },
  buttonText: {
    color: COLOR.white,
    fontWeight: 'bold',
  },
  textDeny: {
    color: COLOR.black,
  },
});

export default NotiItem;
