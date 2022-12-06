import React, {FlatList, StyleSheet, View} from 'react-native';
import ToolBar from './ToolBar';
import News from './News';
import {COLOR} from '../../styles/colors';

export const dataHomePage = [
  {
    avatar: '../../assets/avatar.jpg',
    name: 'Lương Thái Nam',
    time: '25p',
    content: 'Đây là 1 bài đăng',
    liked: true,
    likes: 20,
    comments: 10,
    id: 1,
  },
  {
    avatar: '../../assets/avatar.jpg',
    name: 'Lương Thái Nam',
    time: '25p',
    content: 'Đây là 1 bài đăng',
    liked: false,
    likes: 20,
    comments: 10,
    id: 2,
  },
  {
    avatar: '../../assets/avatar.jpg',
    name: 'Lương Thái Nam',
    time: '25p',
    content: 'Đây là 1 bài đăng',
    liked: false,
    likes: 20,
    comments: 10,
    id: 3,
  },
  {
    avatar: '../../assets/avatar.jpg',
    name: 'Lương Thái Nam',
    time: '25p',
    content: 'Đây là 1 bài đăng',
    liked: false,
    likes: 20,
    comments: 10,
    id: 4,
  },
  {
    avatar: '../../assets/avatar.jpg',
    name: 'Lương Thái Nam',
    time: '25p',
    content: 'Đây là 1 bài đăng',
    liked: false,
    likes: 20,
    comments: 10,
    id: 5,
  },
  {
    avatar: '../../assets/avatar.jpg',
    name: 'Lương Thái Nam',
    time: '25p',
    content: 'Đây là 1 bài đăng',
    liked: false,
    likes: 20,
    comments: 10,
    id: 6,
  },
];

const HomePage = () => {
  const renderItem = ({item}) => (
    <News
      avatar={require('../../assets/avatar.jpg')}
      name={item.name}
      time={item.time}
      content={item.content}
      liked={item.liked}
      likes={item.likes}
      comments={item.comments}
      id={item.id}
    />
  );
  return (
    <View style={styles.homePage}>
      <FlatList
        data={dataHomePage}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListHeaderComponent={ToolBar}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  homePage: {
    flex: 1,
    width: '100%',
  },
});

export default HomePage;
