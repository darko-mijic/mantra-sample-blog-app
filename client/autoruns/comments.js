import state from '../store';
import * as Collections from '../../lib/collections';
import { Meteor } from 'meteor/meteor';
import { action } from 'mobx';

export default () => {

  // SELECTED POST
  const postId = state.selectedPostId;
  const options = {
    sort: {createdAt: -1}
  };

  let commentsSubscriptionHandle;

  // TODO: manage loading state if subscription is not ready

  if (postId) {
    commentsSubscriptionHandle = Meteor.subscribe('posts.comments', postId);
  } else {
    commentsSubscriptionHandle && commentsSubscriptionHandle.stop();
  }
  action('updateCommentsFromAutorun', (comments) => {
    state.comments.replace(comments);
  })(postId && commentsSubscriptionHandle.ready() ? Collections.Comments.find({postId}, options).fetch() : []);

};
