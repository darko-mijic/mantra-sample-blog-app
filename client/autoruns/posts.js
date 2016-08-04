import state from '../store';
import { observe } from 'meteor/space:tracker-mobx-autorun';
import { action } from 'mobx';
import * as Collections from '../../lib/collections';
import { Meteor } from 'meteor/meteor';

const setLoadingPosts = action('setLoadingPosts', isLoading => {
  state.loadingPosts = isLoading;
});

export default () => {

  // ALL POSTS
  const handle = Meteor.subscribe('posts.list');
  const cursor = Collections.Posts.find();
  if (!handle.ready()) {
    setLoadingPosts(true);
  } else {
    observe('postsAutorun', state.posts, handle, cursor);
    setLoadingPosts(false);
  }

};
