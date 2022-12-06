import {useRef} from 'react';
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
import Icon from 'react-native-vector-icons/Ionicons';
import {COLOR} from '../../styles/colors';
import ImagePicker from 'react-native-image-crop-picker';

const CreatePostModal = ({modalVisible, setModalVisible}) => {
  const ref = useRef();
  const openImagePicker = () => {
    ImagePicker.openPicker({
      cropping: true,
      height: 265,
      width: 265,
      mediaType: 'photo',
    })
      .then(image => {
        console.log(image);
        // const imagePath = image.path;
        // let uploadBlob = null;
        // const imageRef = firebase
        //   .storage()
        //   .ref(`/users/${currentUser.uid}/profile`)
        //   .child('dp.jpg');
        // let mime = 'image/jpg';
        // fs.readFile(imagePath, 'base64')
        //   .then(data => {
        //     return Blob.build(data, {type: `${mime};BASE64`});
        //   })
        //   .then(blob => {
        //     uploadBlob = blob;
        //     return imageRef.put(blob, {contentType: mime});
        //   })
        //   .then(() => {
        //     uploadBlob.close();
        //     return imageRef.getDownloadURL();
        //   })
        //   .then(url => {
        //     firebase
        //       .database()
        //       .ref(`/users/${currentUser.uid}/profile`)
        //       .update({
        //         profile_picture: url,
        //       });
        //     let obj = {};
        //     obj['loading'] = false;
        //     obj['dp'] = url;
        //     this.setState(obj);
        // })
        // .catch(error => {
        //   console.log(error + 'OPEN PICKER AGAIN');
        // })
        // .catch(error => {
        //   console.log(error);
        // })
        // .catch(error => {
        //   console.log(error);
        // });
      })
      .catch(callBack => {
        // you forgot to add catch to this promise.
        console.log(callBack); // Please handle the callBack here.
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
            onPress={() => Alert.alert('Simple Button pressed')}
          />
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
          />
        </Pressable>
        <View style={styles.bottom}>
          <TouchableOpacity style={styles.button} onPress={openImagePicker}>
            <Icon name="images-outline" size={25} color={COLOR.green} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Icon name="happy-outline" size={25} color={COLOR.red} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Icon
              name="ellipsis-horizontal-circle-sharp"
              size={25}
              color={COLOR.inactive}
            />
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
  },
  input: {
    paddingLeft: 10,
    paddingRight: 10,
    flex: 1,
  },
  content: {
    flexWrap: 'wrap',
    fontSize: 18,
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
