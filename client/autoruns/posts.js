import state from '../store';
import * as Collections from '../../lib/collections';
import { Meteor } from 'meteor/meteor';
import { action } from 'mobx';

export default () => {

  // ALL POSTS
  const handle = Meteor.subscribe('posts.list');
  if (handle.ready()) {
    const posts = Collections.Posts.find().fetch();

    action('updatePostsFromAutorun', posts => {
      state.posts.replace(posts);
    })(posts);

  }

};
