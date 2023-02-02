import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';
import React, {
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import {COLOR} from '../../styles/colors';
import CommentItem from './CommentItem';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {createComment} from './actions';

const rawData = [
  {
    parentId: 0,
    id: 1,
    name: 'Lương Thái Nam',
    avatar: '../../assets/avatar.jpg',
    content: 'Đây là comment',
    time: '25p',
    likes: 20,
    liked: true,
    hasChild: true,
    child: [
      {
        parentId: 1,
        id: 3,
        name: 'Lương Thái Nam',
        avatar: '../../assets/avatar.jpg',
        content: 'Đây là comment con',
        time: '25p',
        likes: 20,
        liked: true,
        hasChild: false,
        child: [],
      },
      {
        parentId: 1,
        id: 4,
        name: 'Lương Thái Nam',
        avatar: '../../assets/avatar.jpg',
        content: 'Đây là comment con 2',
        time: '25p',
        likes: 20,
        liked: true,
        hasChild: false,
        child: [],
      },
    ],
  },
  {
    parentId: 0,
    id: 2,
    name: 'Lương Thái Nam',
    avatar: '../../assets/avatar.jpg',
    content:
      'Đây là comment dài vcl dài nàyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy',
    time: '25p',
    likes: 0,
    liked: false,
    hasChild: false,
    child: [],
  },
];

// const processData = data => {
//   const dataReturn = [];
//   data.map(item => {
//     if (item.parentId === 0) {
//       dataReturn.push(item);
//     }
//   });
//   data.map(item => {
//     dataReturn.forEach(itemReturn => {
//       if (itemReturn.id === item.parentId) {
//         itemReturn.hasChild = true;
//         itemReturn.child.push(item);
//       }
//     });
//   });
//   return dataReturn;
// };

const CommentsModal = ({modalVisible, setModalVisible, like, setLike, id}) => {
  const dispatch = useDispatch();
  const createCommentResult = useSelector(state => state.createCommentResult);
  // const dataComments = processData(rawData);
  const dataComments = rawData;
  const [text, setText] = useState(undefined);

  useEffect(() => {
    if (createCommentResult) {
      if (createCommentResult.success) {
        console.log(createCommentResult.response);
        // Toast.show('Tạo bài đăng thành công.', Toast.LONG);
        // setModalVisible(!modalVisible);
      } else {
        // Toast.show('Tạo bài đăng thất bại.', Toast.LONG);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [createCommentResult]);

  const handleComment = () => {
    const payload = {
      postId: id,
      content: text,
    };
    dispatch(createComment(payload));
  };

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
    <GestureRecognizer
      style={{flex: 1}}
      onSwipeDown={() => setModalVisible(false)}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.top}>
              <Text style={styles.modalText}>233 lượt thích</Text>
              <TouchableOpacity
                style={styles.icon}
                onPress={() => setLike(!like)}>
                <Icon
                  name={like ? 'thumb-up' : 'thumb-up-outline'}
                  size={20}
                  color={like ? COLOR.active : COLOR.grayTime}
                  style={styles.icon}
                />
              </TouchableOpacity>
            </View>
            <FlatList
              data={dataComments}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
            <View style={styles.commentWrapper}>
              <TextInput
                style={styles.commentText}
                multiline={true}
                cursorColor={COLOR.blue}
                placeholder={'Viết gì đó...'}
                placeholderTextColor={COLOR.black}
                value={text}
                onChangeText={text => setText(text)}
              />
            </View>
            {text && (
              <TouchableOpacity style={styles.send} onPress={handleComment}>
                <IonIcon name="send" size={25} color={COLOR.blue} />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </Modal>
    </GestureRecognizer>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    width: '100%',
    height: '100%',
    backgroundColor: COLOR.white,
    borderRadius: 10,
    padding: 11,
    shadowColor: COLOR.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 5,
  },
  top: {
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  commentWrapper: {
    borderTopWidth: 1,
    borderTopColor: COLOR.gray,
    margin: -11,
    backgroundColor: COLOR.white,
  },
  commentText: {
    justifyContent: 'center',
    backgroundColor: COLOR.gray,
    marginTop: 3,
    marginBottom: 3,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 20,
  },
  send: {
    marginTop: 10,
    alignItems: 'flex-end',
  },
});

export default CommentsModal;
