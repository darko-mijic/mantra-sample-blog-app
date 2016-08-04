import React from 'react';
import {mount} from 'react-mounter';
import { FlowRouter } from 'meteor/kadira:flow-router';

import MainLayout from './components/layouts/main_layout';
import PostList from './containers/posts/postlist';
import Post from './containers/posts/post';
import NewPost from './containers/posts/newpost';
import { selectPost, deselectPost } from './actions/posts';

FlowRouter.route('/', {
  name: 'posts.list',
  action() {
    mount(MainLayout, {
      content: () => (<PostList />)
    });
  }
});

const selectPostTrigger = (context) => {
  selectPost(context.params.postId);
};

const deselectPostTrigger = () => {
  deselectPost();
};

FlowRouter.route('/post/:postId', {
  name: 'posts.single',
  action({postId}) {
    mount(MainLayout, {
      content: () => (<Post postId={postId}/>)
    });
  },
  triggersEnter: [
    selectPostTrigger
  ],
  triggersExit: [
    deselectPostTrigger
  ]
});

FlowRouter.route('/new-post', {
  name: 'newpost',
  action() {
    mount(MainLayout, {
      content: () => (<NewPost/>)
    });
  }
});
