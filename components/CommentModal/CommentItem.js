import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import React, {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {COLOR} from '../../styles/colors';

const CommentItem = ({
  avatar,
  name,
  content,
  time,
  likes,
  liked,
  hasChild,
  child,
}) => {
  const renderItem = ({item}) => (
    <CommentItem
      avatar={require('../../assets/avatar.jpg')}
      name={item.name}
      content={item.content}
      time={item.time}
      likes={item.likes}
      liked={item.liked}
      id={item.id}
      hasChild={item.hasChild}
      child={item.child}
    />
  );

  return (
    <View style={styles.container}>
      <Image source={avatar} style={styles.img} />
      <View style={styles.left}>
        <View style={styles.comment}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.commentText}>{content}</Text>
        </View>
        <View style={styles.bottom}>
          <View style={styles.like}>
            <Text>{time}</Text>
            <Text>Thích</Text>
            <Text>Phản hồi</Text>
          </View>
          {likes > 0 && (
            <View style={styles.likes}>
              <Text>{likes}</Text>
              <MaterialCommunityIcons
                name="thumb-up"
                size={15}
                style={styles.icon}
              />
            </View>
          )}
        </View>
        {hasChild && (
          <FlatList
            data={child}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    flexDirection: 'row',
  },
  img: {
    width: 40,
    height: 40,
    borderRadius: 30,
    marginRight: 10,
  },
  left: {
    flex: 1,
  },
  comment: {
    padding: 10,
    paddingTop: 4,
    paddingBottom: 7,
    backgroundColor: COLOR.grayBackground,
    borderRadius: 10,
  },
  name: {
    fontWeight: 'bold',
    color: COLOR.black,
  },
  commentText: {
    color: COLOR.black,
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    marginBottom: 10,
  },
  like: {
    width: 160,
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingLeft: 10,
    marginRight: 20,
    gap: 10,
    color: COLOR.black,
  },
  likes: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    color: COLOR.active,
    marginLeft: 3,
  },
});

export default CommentItem;
