import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useEffect, useState} from 'react';
import React, {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import CommentsModal from '../CommentModal/CommentsModal';
import {COLOR} from '../../styles/colors';
import Swiper from 'react-native-swiper';
import VideoPlayer from 'react-native-video-player';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import {useDispatch, useSelector} from 'react-redux';
import {getPost, likePost} from './actions';

// id,
// author,
// createAt,
// content,
// status,
// medias,
// numComments,
// numLikes,
// is_liked,
// is_blocked,
// can_edit,
// banned,
// can_comment,
// }

const News = ({item}) => {
  const dispatch = useDispatch();
  const likePostResult = useSelector(state => state.likePostResult);
  const getPostResult = useSelector(state => state.getPostResult);

  const [modalVisible, setModalVisible] = useState(false);
  const [news, setNews] = useState(item);

  const onLikeNews = () => {
    dispatch(likePost({postId: item.id}));
  };

  useEffect(() => {
    if (likePostResult) {
      if (likePostResult.success) {
        dispatch(getPost({postId: item.id}));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [likePostResult]);

  useEffect(() => {
    if (getPostResult) {
      if (getPostResult.success && getPostResult.response.data.id === news.id) {
        setNews(getPostResult.response.data);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getPostResult]);

  return (
    <View style={styles.container}>
      <CommentsModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        // like={like}
        // setLike={setLike}
        id={news.id}
      />
      <TouchableHighlight
        style={styles.top}
        onPress={() => setModalVisible(true)}
        underlayColor={COLOR.underlay}
        activeOpacity={0.05}>
        <>
          <Image source={{uri: news.author.avatar}} style={styles.img} />
          <View style={styles.text}>
            {news.author && <Text style={styles.name}>{news.author.name}</Text>}
            <Text style={[styles.time, styles.gray]}>
              {formatDistanceToNow(new Date(news.createdAt).getTime())}
            </Text>
          </View>
          <TouchableOpacity style={styles.dots}>
            <Icon name="dots-horizontal" size={25} color={COLOR.grayTime} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.close}>
            <Icon name="close" size={25} color={COLOR.grayTime} />
          </TouchableOpacity>
        </>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => setModalVisible(true)}
        underlayColor={COLOR.underlay}
        activeOpacity={0.05}>
        <Text style={styles.content}>{news.content}</Text>
      </TouchableHighlight>
      {news.medias &&
        news.medias[0] &&
        (news.medias[0].type === '0' ? (
          <Swiper loop={false} style={styles.wrapper}>
            {news.medias.map((image, index) => (
              <Image
                source={{uri: image.name}}
                style={styles.imgContent}
                key={index}
              />
            ))}
          </Swiper>
        ) : (
          <VideoPlayer
            video={{
              uri: news.medias[0].name,
            }}
            videoWidth={1600}
            videoHeight={900}
          />
        ))}
      <TouchableHighlight
        style={styles.like}
        onPress={() => setModalVisible(true)}
        underlayColor={COLOR.underlay}
        activeOpacity={0.05}>
        <>
          <Text style={styles.gray}>{news.numLikes} lượt thích</Text>
          <Text style={styles.grayb}>{news.numComments} bình luận</Text>
        </>
      </TouchableHighlight>
      <View style={styles.bottom}>
        <TouchableOpacity style={styles.button} onPress={onLikeNews}>
          <Icon
            name={news.is_liked ? 'thumb-up' : 'thumb-up-outline'}
            size={15}
            color={news.is_liked ? COLOR.active : COLOR.grayTime}
            style={styles.icon}
          />
          <Text style={news.is_liked ? styles.button_like : styles.gray}>
            Thích
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setModalVisible(true)}>
          <Icon
            name={'comment-outline'}
            size={15}
            color={COLOR.grayTime}
            style={styles.icon}
          />
          <Text style={styles.gray}>Bình Luận</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 10,
    backgroundColor: COLOR.white,
  },
  top: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 11,
  },
  img: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 7,
  },
  text: {
    flex: 1,
  },
  name: {
    fontWeight: 'bold',
    color: COLOR.black,
  },
  time: {
    fontWeight: 'light',
    fontSize: 12,
    tintColor: COLOR.grayTime,
  },
  dots: {
    alignItems: 'flex-start',
    textAlign: 'start',
    marginRight: 20,
  },
  close: {
    alignItems: 'flex-start',
    marginRight: -5,
  },
  content: {
    marginTop: 5,
    marginBottom: 5,
    paddingLeft: 11,
    paddingRight: 11,
    color: COLOR.black,
  },
  imgContent: {
    width: '100%',
    height: 300,
    flex: 1,
  },
  backgroundVideo: {
    width: '100%',
    flex: 1,
  },
  like: {
    color: '#333',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 11,
    paddingRight: 11,
  },
  bottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: COLOR.grayBorder,
    paddingLeft: 11,
    paddingRight: 11,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  icon: {
    marginRight: 5,
  },
  button_like: {
    color: COLOR.active,
  },
  gray: {
    color: COLOR.grayTime,
  },
});

export default News;
