import React, {useState} from 'react';
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MessengerItem from './MessengerItem';
import {COLOR} from '../../styles/colors';
import ChatScreen from '../ChatScreen/ChatScreen';

const data = [
  {
    id: 1,
    avatar:
      'http://woridnews.com/wp-content/uploads/2016/10/cd3e35dbcf23269780779b3f7b9e2fcc.png',
    name: ' số 1',
    description: ' số 1 waved at you!',
  },
  {
    id: 2,
    avatar:
      'http://sphm-female-site-production.s3-ap-southeast-1.amazonaws.com/2017/07/w111-750x500.jpg',
    name: ' số 2',
    description: 'lorem ipsum dolor sit amet consectetuer adipiscing elit',
  },
  {
    id: 3,
    avatar: 'https://bellanyc.com/wp-content/uploads/2017/06/blake-lively.jpg',
    name: ' số 3',
    description: 'lorem ipsum dolor sit amet consectetuer adipiscing elit',
  },
  {
    id: 4,
    avatar:
      'https://d1o7cxaf8di5ts.cloudfront.net/file/brand/member-girl-BM.jpg?d=200',
    name: ' số 4',
    description: 'lorem ipsum dolor sit amet consectetuer adipiscing elit',
  },
  {
    id: 5,
    avatar:
      'https://pbs.twimg.com/profile_images/652669289326092288/RsXc7UnS_400x400.jpg',
    name: ' số 5',
    description: 'lorem ipsum dolor sit amet consectetuer adipiscing elit',
  },
  {
    id: 6,
    avatar:
      'https://qph.fs.quoracdn.net/main-qimg-bd14ad5123f2a0b5b7fd457a18e23de8',
    name: ' số 6',
    description: 'lorem ipsum dolor sit amet consectetuer adipiscing elit',
  },
  {
    id: 7,
    avatar:
      'https://66.media.tumblr.com/2ffbcea054ae96a839d0583f4c56ce38/tumblr_ots4vdLKgl1w0bqvso2_250.gif',
    name: ' số 7',
    description: 'lorem ipsum dolor sit amet consectetuer adipiscing elit',
  },
  {
    id: 8,
    avatar: 'http://static.global.mnet.com/data/ucc/000/132/089',
    name: ' số 8',
    description: 'lorem ipsum dolor sit amet consectetuer adipiscing elit',
  },
  {
    id: 9,
    avatar:
      'https://qph.fs.quoracdn.net/main-qimg-bd14ad5123f2a0b5b7fd457a18e23de8',
    name: ' số 9',
    description: 'lorem ipsum dolor sit amet consectetuer adipiscing elit',
  },
  {
    id: 10,
    avatar: 'https://data.whicdn.com/images/148584794/large.jpg',
    name: ' số 10',
    description: 'lorem ipsum dolor sit amet consectetuer adipiscing elit',
  },
  {
    id: 11,
    avatar: 'https://data.whicdn.com/images/148584794/large.jpg',
    name: ' số 10',
    description: 'lorem ipsum dolor sit amet consectetuer adipiscing elit',
  },
  {
    id: 12,
    avatar: 'https://data.whicdn.com/images/148584794/large.jpg',
    name: ' số 10',
    description: 'lorem ipsum dolor sit amet consectetuer adipiscing elit',
  },
  {
    id: 13,
    avatar: 'https://data.whicdn.com/images/148584794/large.jpg',
    name: ' số 10',
    description: 'lorem ipsum dolor sit amet consectetuer adipiscing elit',
  },
  {
    id: 14,
    avatar: 'https://data.whicdn.com/images/148584794/large.jpg',
    name: ' số 10',
    description: 'lorem ipsum dolor sit amet consectetuer adipiscing elit',
  },
  {
    id: 15,
    avatar: 'https://data.whicdn.com/images/148584794/large.jpg',
    name: ' số 10',
    description: 'lorem ipsum dolor sit amet consectetuer adipiscing elit',
  },
];

const MessengerHomePage = ({navigation, setState}) => {
  const [openChat, setOpenChat] = useState(false);
  return (
    <Modal animationType="fade" transparent={true}>
      {openChat && <ChatScreen setOpenChat={setOpenChat} />}
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.button} onPress={() => setState(0)}>
            <Icon name="arrow-back-outline" size={30} color={COLOR.blue} />
          </TouchableOpacity>
          <Text style={styles.title}>Messenger</Text>
        </View>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <MessengerItem item={item} setOpenChat={setOpenChat} />
          )}
          keyExtractor={item => item.id} // tránh trùng các item với nhau
          parentFlatList={this} //để lát làm swipe left và swipe right
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: COLOR.white,
  },
  header: {
    flexDirection: 'row',
  },
  button: {
    paddingLeft: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLOR.black,
    paddingLeft: 10,
    marginBottom: 10,
  },
});

export default MessengerHomePage;
