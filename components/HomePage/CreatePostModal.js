import {useRef, useState} from 'react';
import axios from 'axios';
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
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-crop-picker';
import Swiper from 'react-native-swiper';
import VideoPlayer from 'react-native-video-player';
import {requestCameraPermission} from './../../utils/requestPermisssion/requestCameraPermission';
import {COLOR} from '../../styles/colors';

const CreatePostModal = ({modalVisible, setModalVisible}) => {
  const LoginResult = useSelector(state => state.loginResult);
  const [photos, setPhotos] = useState(undefined);
  const [video, setVideo] = useState(undefined);
  const [index, setIndex] = useState(0);

  const ref = useRef();
  const handlePress = async () => {
    const formData = new FormData();
    formData.append('content', '123456');
    // formData.append('images', photo);
    const a = await axios.post(
      'http://192.168.8.212:8000/posts/create',
      formData,
      {
        header: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    console.log(a);
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
          <Button title="ĐĂNG" onPress={handlePress} />
        </View>
        <View style={styles.user}>
          <Image
            source={require('../../assets/avatar.jpg')}
            style={styles.image}
          />
          <Text style={styles.userName}>Luong Nam</Text>
        </View>
        <Pressable style={styles.input} onPress={() => ref.current.focus()}>
          <TextInput
            ref={ref}
            style={styles.content}
            multiline={true}
            cursorColor={COLOR.blue}
            placeholder={'Bạn đang nghĩ gì?'}
            placeholderTextColor={COLOR.black}
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
            <Icon name="videocam-outline" size={25} color={COLOR.green} />
          </TouchableOpacity>
          {/* <TouchableOpacity style={styles.button}>
            <Icon
              name="happy-outline"
              size={25}
              color={COLOR.red}
              omPress={() => setShowEmoji(true)}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Icon
              name="ellipsis-horizontal-circle-sharp"
              size={25}
              color={COLOR.inactive}
            />
          </TouchableOpacity> */}
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
