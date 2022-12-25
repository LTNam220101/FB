import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {COLOR} from '../../styles/colors';
import ChatItem from './ChatItem';

const data = [
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1,
];

const ChatScreen = ({navigation}) => {
  const [text, setText] = useState(undefined);

  return (
    <View style={styles.chat}>
      <View style={styles.top}>
        <TouchableOpacity onPress={() => navigation.navigate('Messenger')}>
          <Icon
            name="arrow-back-outline"
            size={25}
            color={COLOR.blue}
            style={styles.back}
          />
        </TouchableOpacity>
        <Image
          source={{
            uri: 'http://woridnews.com/wp-content/uploads/2016/10/cd3e35dbcf23269780779b3f7b9e2fcc.png',
          }}
          style={styles.avatar}
        />
        <Text style={styles.name}>SMTB</Text>
      </View>
      <FlatList
        inverted
        style={styles.field}
        data={data}
        renderItem={({item}) => <ChatItem isUser={item} />}
        keyExtractor={(item, index) => index} // tránh trùng các item với nhau
        parentFlatList={this} //để lát làm swipe left và swipe right
      />
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.inputText}
          multiline={true}
          cursorColor={COLOR.blue}
          placeholder={'Nhắn tin'}
          placeholderTextColor={COLOR.black}
          value={text}
          onChangeText={text => setText(text)}
        />
        {text && (
          <TouchableOpacity style={styles.send} onPress={() => {}}>
            <Icon name="send" size={25} color={COLOR.blue} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  chat: {
    flex: 1,
  },
  top: {
    paddingRight: 10,
    paddingLeft: 10,
    backgroundColor: COLOR.white,
    flexDirection: 'row',
    alignItems: 'center',
  },
  back: {
    paddingRight: 10,
  },
  avatar: {width: 30, height: 30, borderRadius: 25},
  name: {color: COLOR.black, marginLeft: 10, fontWeight: 'bold'},
  field: {
    flex: 1,
    paddingRight: 10,
    paddingLeft: 10,
    // flexDirection: 'column-reverse',
  },
  inputWrapper: {
    paddingRight: 10,
    paddingLeft: 10,
    backgroundColor: COLOR.white,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputText: {
    justifyContent: 'center',
    height: 40,
    marginTop: 5,
    paddingLeft: 15,
    marginBottom: 5,
    backgroundColor: COLOR.gray,
    borderRadius: 20,
    flex: 1,
  },
  send: {
    marginLeft: 10,
  },
});
