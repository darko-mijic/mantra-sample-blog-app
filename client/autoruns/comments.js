import { Meteor } from 'meteor/meteor';
import { observe } from 'meteor/space:tracker-mobx-autorun';
import { action } from 'mobx';
import * as Collections from '../../lib/collections';
import state from '../store';

export default () => {

  // SELECTED POST
  const postId = state.selectedPostId;
  const options = {
    sort: { createdAt: -1 }
  };

  if (postId) {
    const handle = Meteor.subscribe('posts.comments', postId);
    const cursor = Collections.Comments.find({ postId }, options);
    observe('commentsAutorun', state.comments, handle, cursor);
  } else {
    action('resetCommentsList', () => {
      state.comments.replace([]);
    })();
  }

};
