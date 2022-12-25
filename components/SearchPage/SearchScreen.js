import React, {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import SearchItem from './SearchItem';
import {Searchbar} from 'react-native-paper';
import {COLOR} from '../../styles/colors';

const SearchScreen = ({setState}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      onRequestClose={() => {
        setState(0);
      }}>
      <ScrollView style={styles.modalView}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.button} onPress={() => setState(0)}>
            <Icon name="arrow-back-outline" size={30} color={COLOR.blue} />
          </TouchableOpacity>
          <Searchbar placeholder="Tìm kiếm" style={styles.input} />
        </View>
        <SearchItem
          avatar={require('../../assets/avatar.jpg')}
          content="Đội SVTN Trường CNTT&TT"
          notiContent="1 thông báo mới"
        />
        <SearchItem
          avatar={require('../../assets/avatar.jpg')}
          content="ĐTN-HSV Trường CNTT&TT"
          notiContent="2 thông báo mới"
        />
        <SearchItem
          avatar={require('../../assets/avatar.jpg')}
          content="Đội SVTN Trường CNTT&TT"
          notiContent="3 thông báo mới"
        />
        <SearchItem
          avatar={require('../../assets/avatar.jpg')}
          content="ĐTN-HSV Trường CNTT&TT"
          notiContent="1 thông báo mới"
        />
        <SearchItem
          avatar={require('../../assets/avatar.jpg')}
          content="Đội SVTN Trường CNTT&TT"
          notiContent="2 thông báo mới"
        />
        <SearchItem
          avatar={require('../../assets/avatar.jpg')}
          content="ĐTN-HSV Trường CNTT&TT"
          notiContent="3 thông báo mới"
        />
      </ScrollView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
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
  header: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 10,
    backgroundColor: COLOR.white,
  },
  text: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 25,
    color: COLOR.black,
  },
  button: {
    borderRadius: 21,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  input: {
    flex: 1,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLOR.grayBorder,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SearchScreen;
