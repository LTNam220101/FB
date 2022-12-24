import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react-native';

const SearchItem = ({avatar, content, notiNum}) => {
    return (
        <TouchableHighlight>

        </TouchableHighlight>
    );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    backgroundColor: COLOR.blueBackground,
    padding: 10,
  },
  read: {
    backgroundColor: COLOR.white,
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  content: {
    marginRight: 8,
    marginLeft: 8,
    flex: 1,
  },
  fullContent: {
    color: COLOR.grayTime,
  },
  name: {
    fontWeight: 'bold',
    color: COLOR.black,
  },
  time: {
    color: COLOR.grayTime,
  },
});

export default SearchItem;