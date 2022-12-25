import React, {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLOR} from '../styles/colors';
import Icon from 'react-native-vector-icons/Feather';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import SearchScreen from './SearchPage/SearchScreen';
import {useState} from 'react';

const AppBar = () => {

  const [searchVisible, setSearchVisible] = useState(false);

  return (
    <View style={styles.container}>
      <SearchScreen
        searchVisible={searchVisible}
        setSearchVisible={setSearchVisible}
      />
      <Text style={styles.text}>facebook</Text>
      <View style={styles.buttons}>
        <TouchableOpacity 
        style={styles.button}
        onPress={() => setSearchVisible(true)}>
          <Icon name="search" size={29} color={COLOR.black} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setState(2)}>
          <IconM name="facebook-messenger" size={29} color={COLOR.black} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 58,
    paddingLeft: 11,
    paddingRight: 11,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLOR.white,
  },
  text: {
    color: COLOR.active,
    fontSize: 32,
    fontWeight: 'bold',
    letterSpacing: -0.3,
  },
  buttons: {
    flexDirection: 'row',
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
});

export default AppBar;
