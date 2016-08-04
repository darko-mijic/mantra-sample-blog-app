import React, { Component } from 'react';
import CommentList from '../../components/comments/comment_list';
import { observer } from 'mobx-react';
import state from '../../store';

export default observer(class extends Component {
  render() {
    if (state.loadingComments) {
      return <div>Loading...</div>;
    }
    return <CommentList postId={state.selectedPostId} comments={state.comments}/>;
  }
});
