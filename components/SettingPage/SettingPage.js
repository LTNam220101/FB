import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import {authLogout} from '../LoginPage/actions';
import {AUTH_LOGIN_CLEAR} from '../LoginPage/reducers';
import {COLOR} from '../../styles/colors';

const SettingPage = ({setIsSignIn}) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(authLogout());
    dispatch({type: AUTH_LOGIN_CLEAR});
    setIsSignIn(false);
  };
  return (
    <ScrollView style={{flex: 1, backgroundColor: COLOR.white}}>
      <View style={styles.header}>
        <Text style={styles.text}>Cài đặt</Text>
      </View>
      <TouchableOpacity
        onPress={handleLogout}
        style={styles.button}
        underlayColor={COLOR.underlay}
        activeOpacity={0.5}>
        <Text style={styles.button_text}>Đăng xuất</Text>
      </TouchableOpacity>
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
    marginTop: 20,
    marginRight: 10,
    marginLeft: 10,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 5,
    backgroundColor: COLOR.grayBackground,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button_text: {
    color: COLOR.black,
  },
});

export default SettingPage;
