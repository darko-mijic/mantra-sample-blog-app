import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Post from '../../components/posts/post';
import state from '../../store';

export default observer(class extends Component {
  render() {
    const post = state.selectedPost;
    if (!post || post._id !== state.selectedPostId) {
      return <div>Loading...</div>;
    }
    return (<Post post={state.selectedPost}/>);
  }
});
