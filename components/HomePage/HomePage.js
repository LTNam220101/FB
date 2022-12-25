/* eslint-disable react-hooks/exhaustive-deps */
import React, {FlatList, StyleSheet, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {useEffect} from 'react';
import ToolBar from './ToolBar';
import News from '../News/News';
import {getAvatar} from '../../global-actions/getAvatar/actions';

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
    images: [
      require('../../assets/image1.jpg'),
      require('../../assets/image2.jpg'),
      require('../../assets/image3.jpg'),
      require('../../assets/image4.jpg'),
    ],
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
    images: [
      require('../../assets/image1.jpg'),
      require('../../assets/image2.jpg'),
      require('../../assets/image3.jpg'),
    ],
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
    images: [
      require('../../assets/image1.jpg'),
      require('../../assets/image2.jpg'),
    ],
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
    images: [require('../../assets/image1.jpg')],
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
    video: require('../../assets/bruh.mp4'),
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
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getAvatar());
  // }, []);

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
      images={item.images}
      video={item.video}
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
