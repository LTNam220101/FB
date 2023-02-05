import {useEffect, useState} from 'react';
import React, {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import CreatePostModal from './CreatePostModal';
import Avatar from '../Avatar';
import {COLOR} from './../../styles/colors';
import {getObject} from '../../utils/storage';

const ToolBar = ({inProfile}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [user, setUser] = useState();

  useEffect(() => {
    getObject('user').then(user => {
      setUser(user);
    });
  }, []);

  return (
    <View style={styles.view}>
      <CreatePostModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      {user && <Avatar source={{uri: user.avatar}} />}
      <TouchableHighlight
        style={styles.input}
        onPress={() => setModalVisible(true)}
        underlayColor={COLOR.underlay}
        activeOpacity={0.05}>
        <Text style={{color: COLOR.black}}>
          {inProfile
            ? 'Viết gì đó cho bạn bè'
            : 'Ngày hôm nay của bạn thế nào?'}
        </Text>
      </TouchableHighlight>
      {/* <TouchableOpacity style={styles.button}>
        <Icon name="images-outline" size={25} color={COLOR.green} />
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    width: '100%',
    height: 68,
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 11,
    paddingLeft: 11,
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor: COLOR.white,
  },
  input: {
    flex: 1,
    height: 35,
    paddingLeft: 10,
    paddingRight: 10,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLOR.grayBorder,
    justifyContent: 'center',
  },
  button: {
    borderRadius: 21,
    paddingLeft: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ToolBar;
