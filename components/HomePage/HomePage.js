/* eslint-disable react-hooks/exhaustive-deps */
import React, {FlatList, StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';
import {Component} from 'react';
import ToolBar from './ToolBar';
import News from '../News/News';
import {getAllPosts} from '../News/actions';
import {getObject} from '../../utils/storage';

class HomePage extends Component {
  skip = 0;
  conti = true;
  refresh = false;
  news = [];

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    getObject('user').then(user => {
      this.props.getAllPosts({take: 2, skip: this.skip});
    });
  }

  shouldComponentUpdate(nextProps) {
    if (
      this.props.getAllPostsResult !== nextProps.getAllPostsResult &&
      nextProps.getAllPostsResult
    ) {
      if (nextProps.getAllPostsResult.success) {
        this.news = [
          ...this.news,
          ...nextProps.getAllPostsResult.response.data,
        ];
        this.refresh = false;
        if (this.skip + 2 >= nextProps.getAllPostsResult.response.data.count) {
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
    this.news = [];
    this.refresh = true;
    this.conti = true;
    getObject('user').then(user => {
      this.props.getAllPosts({take: 2, skip: this.skip});
    });
  };

  handleLoadmore = () => {
    if (this.conti) {
      getObject('user').then(user => {
        this.props.getAllPosts({take: 2, skip: this.skip});
      });
    }
  };

  renderItem = ({item}) => <News item={item} />;
  render() {
    return (
      <View style={styles.homePage}>
        {this.news && (
          <FlatList
            refreshing={this.refresh}
            onRefresh={this.handleRefresh}
            onEndReachedThreshold={1}
            onEndReached={this.handleLoadmore}
            data={this.news}
            renderItem={this.renderItem}
            keyExtractor={item => item.id}
            ListHeaderComponent={ToolBar}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  homePage: {
    flex: 1,
    width: '100%',
  },
});

const mapStateToProps = state => ({
  getAllPostsResult: state.getAllPostsResult,
});

const mapDispatchToProps = {
  getAllPosts,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
