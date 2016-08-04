import state from '../store';
import { observe } from 'meteor/space:tracker-mobx-autorun';
import * as Collections from '../../lib/collections';
import { Meteor } from 'meteor/meteor';

export default () => {

  // ALL POSTS
  const handle = Meteor.subscribe('posts.list');
  const cursor = Collections.Posts.find();
  observe('postsAutorun', state.posts, handle, cursor);
  return handle;

};
