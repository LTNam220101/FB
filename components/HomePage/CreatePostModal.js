import {useRef, useState, useEffect} from 'react';
import React, {
  Alert,
  Button,
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-crop-picker';
import Swiper from 'react-native-swiper';
import VideoPlayer from 'react-native-video-player';
import Toast from 'react-native-simple-toast';
import {requestCameraPermission} from './../../utils/requestPermisssion/requestCameraPermission';
import {COLOR} from '../../styles/colors';
import {createPost} from './actions';
import {getObject} from '../../utils/storage';

const CreatePostModal = ({modalVisible, setModalVisible}) => {
  const dispatch = useDispatch();
  const createPostResult = useSelector(state => state.createPostResult);
  const [user, setUser] = useState();

  const [text, setText] = useState(undefined);
  const [photos, setPhotos] = useState(undefined);
  const [video, setVideo] = useState(undefined);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    getObject('user').then(user => {
      setUser(user);
    });
  }, []);

  useEffect(() => {
    if (createPostResult) {
      if (createPostResult.success) {
        Toast.show('Tạo bài đăng thành công.', Toast.LONG);
        setModalVisible(!modalVisible);
      } else {
        Toast.show('Tạo bài đăng thất bại.', Toast.LONG);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [createPostResult]);
  const ref = useRef();
  const handlePress = () => {
    const payload = {
      images: photos,
      video: video,
      content: text,
    };
    // ToastAndroid.show('Request sent successfully!', ToastAndroid.SHORT);
    dispatch(createPost(payload));
  };

  const openImagePicker = () => {
    requestCameraPermission().then(data => {
      ImagePicker.openPicker({
        width: 300,
        height: 400,
        multiple: true,
        mediaType: 'photo',
      })
        .then(images => {
          if (video) {
            Alert.alert(
              'Quá giới hạn ảnh/video',
              'Bạn chỉ có thể đăng tối đa 4 ảnh hoặc 1 video',
            );
          } else {
            if (images.length <= 4) {
              if (photos) {
                if (photos.length + images.length <= 4) {
                  setPhotos([...photos, ...images]);
                } else {
                  Alert.alert(
                    'Quá giới hạn ảnh/video',
                    'Bạn chỉ có thể đăng tối đa 4 ảnh hoặc 1 video',
                  );
                }
              } else {
                setPhotos([...images]);
              }
            } else {
              Alert.alert(
                'Quá giới hạn ảnh/video',
                'Bạn chỉ có thể đăng tối đa 4 ảnh hoặc 1 video',
              );
            }
          }
        })
        .catch(callBack => {
          // you forgot to add catch to this promise.
          console.log(callBack); // Please handle the callBack here.
        });
    });
  };

  const openVideoPicker = () => {
    requestCameraPermission().then(data => {
      ImagePicker.openPicker({
        mediaType: 'video',
      })
        .then(video => {
          if (photos) {
            Alert.alert(
              'Quá giới hạn ảnh/video',
              'Bạn chỉ có thể đăng tối đa 4 ảnh hoặc 1 video',
            );
          } else {
            setVideo(video);
          }
        })
        .catch(callBack => {
          // you forgot to add catch to this promise.
          console.log(callBack); // Please handle the callBack here.
        });
    });
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.modalView}>
        <View style={styles.top}>
          <TouchableOpacity
            style={styles.return}
            onPress={() => setModalVisible(false)}>
            <Icon name={'arrow-back-outline'} size={30} color={COLOR.black} />
          </TouchableOpacity>
          <Text style={styles.text}>Tạo bài viết</Text>
          <Button
            title="ĐĂNG"
            onPress={handlePress}
            disabled={!(text || photos || video)}
          />
        </View>
        <View style={styles.user}>
          {user && <Image source={{uri: user.avatar}} style={styles.image} />}
          {user && <Text style={styles.userName}>{user.name}</Text>}
        </View>
        <Pressable style={styles.input} onPress={() => ref.current.focus()}>
          <TextInput
            ref={ref}
            style={styles.content}
            multiline={true}
            cursorColor={COLOR.blue}
            placeholder={'Bạn đang nghĩ gì?'}
            placeholderTextColor={COLOR.black}
            value={text}
            onChangeText={text => setText(text)}
          />
        </Pressable>
        {video && (
          <View style={{flex: 1, position: 'relative'}}>
            <VideoPlayer
              video={{uri: video.path}}
              videoWidth={1600}
              videoHeight={900}
            />
            <TouchableOpacity
              style={styles.close}
              onPress={() => {
                setVideo(undefined);
              }}>
              <Icon name="close" size={25} color={COLOR.grayTime} />
            </TouchableOpacity>
          </View>
        )}
        {photos && photos.length && (
          <View style={{flex: 1, position: 'relative'}}>
            <Swiper
              loop={false}
              onIndexChanged={index => {
                setIndex(index);
              }}>
              {photos.map((photo, index) => (
                <Image
                  style={styles.avatar}
                  source={{uri: photo.path}}
                  key={index}
                />
              ))}
            </Swiper>
            <TouchableOpacity
              style={styles.close}
              onPress={() => {
                setPhotos(photos.filter((photo, pIndex) => pIndex !== index));
              }}>
              <Icon name="close" size={25} color={COLOR.grayTime} />
            </TouchableOpacity>
          </View>
        )}
        <View style={styles.bottom}>
          <TouchableOpacity style={styles.button} onPress={openImagePicker}>
            <Icon name="images-outline" size={25} color={COLOR.green} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={openVideoPicker}>
            <Icon name="videocam-outline" size={25} color={COLOR.red} />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalView: {
    width: '100%',
    height: '100%',
    backgroundColor: COLOR.white,
    shadowColor: COLOR.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 5,
  },
  avatar: {
    flex: 1,
  },
  top: {
    padding: 10,
    paddingBottom: 5,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: COLOR.gray,
  },
  return: {
    paddingRight: 5,
  },
  text: {
    marginBottom: 4,
    alignSelf: 'center',
    flex: 1,
    fontSize: 18,
    color: COLOR.black,
  },
  user: {
    padding: 10,
    flexDirection: 'row',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 16,
    color: COLOR.black,
  },
  input: {
    paddingLeft: 10,
    paddingRight: 10,
    flex: 1,
    color: COLOR.black,
  },
  content: {
    flexWrap: 'wrap',
    fontSize: 18,
    color: COLOR.black,
  },
  close: {
    position: 'absolute',
    right: 0,
    top: 0,
  },
  bottom: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: COLOR.gray,
  },
});

export default CreatePostModal;
