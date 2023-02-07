import React, {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useEffect} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import NotiItem from './NotiItem';
import {useDispatch, useSelector} from 'react-redux';
import {COLOR} from '../../styles/colors';
import {getListFriends, getRequests} from '../ProfilePage/actions';

const NotiPage = ({setIsSignIn}) => {
  const dispatch = useDispatch();
  const getRequestsResult = useSelector(state => state.getRequestsResult);
  const setAcceptResult = useSelector(state => state.setAcceptResult);

  useEffect(() => {
    dispatch(getRequests());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (setAcceptResult) {
      if (setAcceptResult.success) {
        dispatch(getRequests());
        dispatch(getListFriends());
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setAcceptResult]);

  // const handleLogout = () => {
  //   dispatch(authLogout());
  //   dispatch({type: AUTH_LOGIN_CLEAR});
  //   setIsSignIn(false);
  // };

  return (
    <ScrollView style={{flex: 1, backgroundColor: COLOR.white}}>
      <View style={styles.header}>
        <Text style={styles.text}>Thông báo</Text>
        <TouchableOpacity style={styles.button}>
          <Icon name="search" size={20} color={COLOR.black} />
        </TouchableOpacity>
      </View>
      {getRequestsResult &&
        getRequestsResult.response &&
        getRequestsResult.response.data.map(request => (
          <NotiItem
            type={0}
            avatar={{uri: request.avatar}}
            name={request.name}
            read
            id={request.id}
            key={request.id}
          />
        ))}
      <NotiItem
        type={1}
        avatar={require('../../assets/avatar.jpg')}
        name="Lương Thái Nam"
        read
        time="25p"
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    paddingLeft: 11,
    paddingRight: 11,
    marginBottom: 10,
    marginTop: 7,
    backgroundColor: COLOR.white,
  },
  text: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 25,
    color: COLOR.black,
  },
  button: {
    width: 30,
    height: 30,
    borderRadius: 21,
    backgroundColor: COLOR.grayBackground,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 16,
  },
});

export default NotiPage;
