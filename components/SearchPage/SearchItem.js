import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React, {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLOR} from '../../styles/colors';

const SearchItem = ({avatar, content, notiContent}) => {
  return (
    <TouchableHighlight>
      <View style={[styles.wrapper]}>
        <Image source={avatar} style={styles.img} />
        <View style={styles.content}>
          <Text numberOfLines={2} style={styles.fullContent}>
            <Text style={styles.name}>{content} </Text>
            <Text>{'\n'}</Text>
            <Text>{notiContent}</Text>
          </Text>
        </View>

        <TouchableOpacity>
          <Icon name="close" style={styles.icon} />
        </TouchableOpacity>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: COLOR.grayBorder,
  },
  icon: {
    marginTop: 4,
    color: COLOR.grayTime,
    fontSize: 30,
  },
  img: {
    width: 40,
    height: 40,
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
    fontSize: 15,
  },
});

export default SearchItem;
