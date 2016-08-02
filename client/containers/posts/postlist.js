import React, { Component } from 'react';
import PostList from '../../components/posts/postlist';
import { observer } from 'mobx-react';
import state from '../../store';

export default observer(class extends Component {
  render() {
    if (!state.posts) {
      return <div>Loading...</div>;
    }
    return (<PostList posts={state.posts}/>);
  }
});
