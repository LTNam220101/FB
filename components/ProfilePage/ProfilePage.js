import React, {Component} from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import {COLOR} from '../../styles/colors';
import ProfileHeader from '../ProfileHeader/ProfileHeader';
import {getObject} from '../../utils/storage';
import {connect} from 'react-redux';
import {getUserPosts} from './actions';
import News from '../News/News';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.backgroundColor,
  },
  empty: {
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: COLOR.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {},
});

class ProfilePage extends Component {
  skip = 0;
  conti = true;
  refresh = false;
  stories = [];

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    getObject('user').then(user => {
      this.props.getUserPosts({id: user.id, take: 2, skip: this.skip});
    });
  }

  shouldComponentUpdate(nextProps) {
    if (
      this.props.checkUserResult !== nextProps.checkUserResult &&
      nextProps.checkUserResult
    ) {
      this.handleRefresh();
      return true;
    }
    if (
      this.props.getUserPostsResult !== nextProps.getUserPostsResult &&
      nextProps.getUserPostsResult
    ) {
      if (nextProps.getUserPostsResult.success) {
        this.stories = [
          ...this.stories,
          ...nextProps.getUserPostsResult.response.data.items,
        ];
        this.refresh = false;
        if (this.skip + 2 >= nextProps.getUserPostsResult.response.data.count) {
          this.conti = false;
        } else {
          this.skip += 2;
        }
        return true;
      }
    }
    return false;
  }

  handleRefresh = () => {
    this.skip = 0;
    this.stories = [];
    this.refresh = true;
    this.conti = true;
    getObject('user').then(user => {
      this.props.getUserPosts({id: user.id, take: 2, skip: this.skip});
    });
  };

  handleLoadmore = () => {
    if (this.conti) {
      getObject('user').then(user => {
        this.props.getUserPosts({id: user.id, take: 2, skip: this.skip});
      });
    }
  };

  renderItem = ({item}) => <News item={item} />;
  render() {
    return (
      <View style={styles.container}>
        {this.stories && (
          <FlatList
            refreshing={this.refresh}
            onRefresh={this.handleRefresh}
            onEndReachedThreshold={1}
            onEndReached={this.handleLoadmore}
            data={this.stories}
            renderItem={this.renderItem}
            keyExtractor={item => item.id}
            ListHeaderComponent={ProfileHeader}
            ListEmptyComponent={
              <View style={styles.empty}>
                <Text style={styles.emptyText}>Chưa có bài viết nào</Text>
              </View>
            }
          />
        )}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  getUserPostsResult: state.getUserPostsResult,
  checkUserResult: state.checkUserResult,
});

const mapDispatchToProps = {
  getUserPosts,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
