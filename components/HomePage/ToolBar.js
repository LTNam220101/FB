import {useState} from 'react';
import React, {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CreatePostModal from './CreatePostModal';
import Avatar from '../Avatar';
import {COLOR} from './../../styles/colors';
import {useSelector} from 'react-redux';

const ToolBar = ({inProfile}) => {
  const getAvatarResult = useSelector(state => state.getAvatarResult);
  const [modalVisible, setModalVisible] = useState(false);
  const imageBlob =
    getAvatarResult && getAvatarResult.response
      ? getAvatarResult.response.blob()
      : undefined;
  const imageObjectURL = imageBlob ? URL.createObjectURL(imageBlob) : undefined;
  console.log(imageObjectURL);
  return (
    <View style={styles.view}>
      <CreatePostModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      <Avatar source={require('../../assets/avatar.jpg')} />
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
