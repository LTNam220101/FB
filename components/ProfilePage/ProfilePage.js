import React, {useState, useEffect, useMemo} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {COLOR} from '../../styles/colors';
import ProfileHeader from '../ProfileHeader/ProfileHeader';
import {getObject} from '../../utils/storage';
import {useDispatch, useSelector} from 'react-redux';
import {getUserPosts} from './actions';
import News from '../News/News';

const ProfilePage = () => {
  const dispatch = useDispatch();
  const getUserPostsResult = useSelector(state => state.getUserPostsResult);
  const [stories, setStories] = useState([]);
  const [skip, setSkip] = useState(0);
  const [conti, setConti] = useState(true);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    if (getUserPostsResult) {
      if (getUserPostsResult.success) {
        setStories([...stories, ...getUserPostsResult.response.data.items]);
        setRefresh(false);
        if (skip * 2 >= getUserPostsResult.response.data.count) {
          setConti(false);
        } else {
          setSkip(skip => skip + 2);
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getUserPostsResult]);

  useEffect(() => {
    getObject('user').then(user => {
      dispatch(getUserPosts({id: user.id, take: 2, skip: skip}));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleRefresh = () => {
    setSkip(0);
    setStories([]);
    setRefresh(true);
    setConti(true);
    getObject('user').then(user => {
      dispatch(getUserPosts({id: user.id, take: 2, skip: skip}));
    });
  };

  const handleLoadmore = () => {
    if (conti) {
      getObject('user').then(user => {
        dispatch(getUserPosts({id: user.id, take: 2, skip: skip}));
      });
    }
  };

  const renderItem = ({item}) => <News item={item} />;
  return (
    <View style={styles.container}>
      {stories && (
        <FlatList
          refreshing={refresh}
          onRefresh={handleRefresh}
          onEndReachedThreshold={1}
          onEndReached={handleLoadmore}
          data={stories}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          ListHeaderComponent={ProfileHeader}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.backgroundColor,
  },
});

export default ProfilePage;
