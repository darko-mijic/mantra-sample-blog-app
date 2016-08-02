import state from '../store';
import * as Collections from '../../lib/collections';
import { Meteor } from 'meteor/meteor';
import { action } from 'mobx';

export default () => {

  // SELECTED POST
  const postId = state.selectedPostId;
  Meteor.subscribe('posts.single', String(postId));
  action('updatePostFromAutorun', (post) => {
    state.selectedPost = post;
  })(postId ? Collections.Posts.findOne(postId) : null);

};
