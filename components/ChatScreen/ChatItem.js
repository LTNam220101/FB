import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {COLOR} from '../../styles/colors';

const ChatItem = ({isUser}) => {
  return (
    <View style={isUser ? styles.isUser : styles.chatItem}>
      {!isUser && (
        <Image
          source={{
            uri: 'http://woridnews.com/wp-content/uploads/2016/10/cd3e35dbcf23269780779b3f7b9e2fcc.png',
          }}
          style={styles.avatar}
        />
      )}
      <Text style={isUser ? styles.chatTextUser : styles.chatText}>
        Hello world Hello world Hed Hello world{' '}
      </Text>
    </View>
  );
};

export default ChatItem;

const styles = StyleSheet.create({
  chatItem: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  isUser: {
    flexDirection: 'row-reverse',
    marginBottom: 10,
  },
  avatar: {width: 30, height: 30, borderRadius: 25},
  chatText: {
    backgroundColor: COLOR.gray,
    alignItems: 'center',
    padding: 5,
    paddingRight: 10,
    paddingLeft: 10,
    borderRadius: 15,
  },
  chatTextUser: {
    backgroundColor: COLOR.gray,
    alignItems: 'center',
    padding: 5,
    paddingRight: 10,
    paddingLeft: 10,
    borderRadius: 15,
    textAlign: 'right',
  },
});
