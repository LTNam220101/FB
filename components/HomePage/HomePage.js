/* eslint-disable react-hooks/exhaustive-deps */
import React, {FlatList, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import ToolBar from './ToolBar';
import News from '../News/News';
// import {getObject} from '../../utils/storage';
// import {getUserPosts} from '../ProfilePage/actions';
import {getPost} from '../News/actions';
import {getUserPosts} from '../ProfilePage/actions';
import {getObject} from '../../utils/storage';

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
  // const getUserPostsResult = useSelector(state => state.getUserPostsResult);

  // useEffect(() => {
  //   if (getUserPostsResult) {
  //     if (getUserPostsResult.success) {
  //       console.log(getUserPostsResult.response);
  //       // Toast.show('Tạo bài đăng thành công.', Toast.LONG);
  //       // setModalVisible(!modalVisible);
  //     } else {
  //       // Toast.show('Tạo bài đăng thất bại.', Toast.LONG);
  //     }
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [getUserPostsResult]);

  // useEffect(() => {
  //   getObject('user').then(user => {
  //     dispatch(getUserPosts({author: user.id}));
  //   });
  // }, []);

  const getPostResult = useSelector(state => state.getPostResult);

  useEffect(() => {
    if (getPostResult) {
      if (getPostResult.success) {
        // console.log(getPostResult.response.data);
        // Toast.show('Tạo bài đăng thành công.', Toast.LONG);
        // setModalVisible(!modalVisible);
      } else {
        // Toast.show('Tạo bài đăng thất bại.', Toast.LONG);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getPostResult]);

  useEffect(() => {
    dispatch(getPost({postId: '634076d9-b3cf-4850-8177-462df54d9662'}));
  }, []);

  const renderItem = ({item}) => <News item={item} />;
  return (
    <View style={styles.homePage}>
      {getPostResult && (
        <FlatList
          data={[getPostResult.response.data]}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          ListHeaderComponent={ToolBar}
        />
      )}
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
