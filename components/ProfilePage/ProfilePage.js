import React, {View, FlatList, StyleSheet} from 'react-native';
import ProfileHeader from '../ProfileHeader/ProfileHeader';

const renderItem = ({item}) => <View />;

const ProfilePage = () => {
  return (
    <View style={styles.profile}>
      <FlatList
        data={[]}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListHeaderComponent={ProfileHeader}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  profile: {
    flex: 1,
    width: '100%',
  },
});

export default ProfilePage;
