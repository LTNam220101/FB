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
import ToolBar from '../HomePage/ToolBar';

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
  return (
    <View style={styles.friends}>
      <Text style={styles.text}>Bạn bè</Text>
      <Text style={styles.number}>1024 bạn</Text>
      <View style={styles.grid}>
        <Friend
          avatar={require('../../assets/avatar.jpg')}
          name={'Nam Luong'}
          id={1}
        />
        <Friend
          avatar={require('../../assets/avatar.jpg')}
          name={'Nam Luong'}
          id={1}
        />
        <Friend
          avatar={require('../../assets/avatar.jpg')}
          name={'Nam Luong'}
          id={1}
        />
        <Friend
          avatar={require('../../assets/avatar.jpg')}
          name={'Nam Luong'}
          id={1}
        />
        <Friend
          avatar={require('../../assets/avatar.jpg')}
          name={'Nam Luong'}
          id={1}
        />
        <Friend
          avatar={require('../../assets/avatar.jpg')}
          name={'Nam Luong'}
          id={1}
        />
      </View>
      <Button
        // onPress={() => navigation.navigate('Signup')}
        color={COLOR.gray}
        title="Xem tất cả bạn bè"
      />
    </View>
  );
};

const ProfileHeader = () => {
  return (
    <View style={styles.header}>
      <Friends />
      <ToolBar inProfile />
    </View>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
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
