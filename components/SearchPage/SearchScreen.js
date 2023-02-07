import React, {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Modal,
  Text,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import SearchItem from './SearchItem';
import {Searchbar} from 'react-native-paper';
import {COLOR} from '../../styles/colors';
import {useDispatch, useSelector} from 'react-redux';
import {search} from './actions';
import {SEARCH_CLEAR} from './reducers';
import News from '../News/News';

const SearchScreen = ({setState}) => {
  const dispatch = useDispatch();
  const searchResult = useSelector(state => state.searchResult);

  const onChangeSearch = query => {
    if (query) {
      dispatch(
        search({
          keyword: query,
          searchType: 0,
          skip: 0,
          take: 10,
        }),
      );
    } else {
      dispatch({type: SEARCH_CLEAR});
    }
  };

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
          <Searchbar
            placeholder="Tìm kiếm"
            onChangeText={onChangeSearch}
            style={styles.input}
          />
        </View>
        {searchResult && searchResult.response.data.users.length ? (
          <Text style={styles.text2}>Người dùng</Text>
        ) : null}
        {searchResult && searchResult.response.data.users.length
          ? searchResult.response.data.users.map(user => (
              <SearchItem
                key={user.id}
                avatar={{uri: user.avatar}}
                content={user.name}
                notiContent=""
              />
            ))
          : null}
        {searchResult && searchResult.response.data.posts.length ? (
          <Text style={styles.text2}>Bài viết</Text>
        ) : null}
        {searchResult && searchResult.response.data.posts.length
          ? searchResult.response.data.posts.map(user => (
              <News item={user} key={user.id} />
            ))
          : null}
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
  text2: {
    marginLeft: 8,
    fontWeight: 'bold',
    fontSize: 18,
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
